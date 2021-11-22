import axios, { AxiosInstance } from "axios";

import { StarWarsApiCache, StarWarsApiListResult } from "@/models/apis";

import { Character, CharacterData } from "@/models/characters";

import { Planet, PlanetData } from "@/models/planets";

import { getIdFromUrl } from "@/utils/api";

export class StarWarsApi {
  private cache: StarWarsApiCache = new StarWarsApiCache();

  constructor(private api: AxiosInstance) {
    if (this.api === null) {
      throw new Error("StarWarsApi: `api` must not be `null`");
    }
  }

  public async getCharacters(
    searchTerm = "",
    page = 1
  ): Promise<Array<Character>> {
    try {
      let results: Array<CharacterData>;

      const existingCharacterData: Possibly<Array<CharacterData>> =
        this.cache.getPeopleData(searchTerm);

      if (existingCharacterData) {
        results = existingCharacterData;
      } else {
        let url = `people?page=${page}`;

        if (searchTerm) {
          url = `${url}?search=${encodeURIComponent(searchTerm)}`;
        }

        const { data } = await this.api.get<
          StarWarsApiListResult<CharacterData>
        >(url);

        results = data.results;

        this.cache.addPeopleData(searchTerm, results);
      }

      const characterPlanets: Map<number, Array<Character>> = new Map();

      const characters: Array<Character> = (results ?? []).map(
        (characterData: CharacterData) => {
          const id = getIdFromUrl(characterData.url);

          const existingCharacter: Possibly<Character> =
            this.cache.getCharacter(id);

          if (existingCharacter) {
            return existingCharacter;
          }

          const planetId = getIdFromUrl(characterData.homeworld);

          characterData.id = id;

          characterData.homeworldId = planetId;

          const character = Character.from(characterData);

          this.cache.addCharacter(id, character);

          if (!characterPlanets.has(planetId)) {
            characterPlanets.set(planetId, []);
          }

          characterPlanets.get(planetId)?.push(character);

          return character;
        }
      );

      const planetPromises = Array.from(characterPlanets.keys()).map(
        (planetId) => {
          return this.getPlanet(planetId);
        }
      );

      const planetResults = await Promise.allSettled(planetPromises);

      planetResults.forEach((result) => {
        if (result.status === "rejected") {
          return;
        }

        const planet = result.value;

        if (planet == null) {
          return;
        }

        characterPlanets.get(planet.id)?.forEach((character) => {
          character.setHomeworld(planet);
        });
      });

      return characters;
    } catch (error) {
      this.handleError(error);
    }

    return [];
  }

  public async getPlanet(id: number): Promise<Planet | null> {
    if (id <= 0) {
      return null;
    }

    try {
      const existingPlanet: Possibly<Planet> = this.cache.getPlanet(id);

      if (existingPlanet) {
        return existingPlanet;
      }

      let data: PlanetData;

      const existingPlanetData: Possibly<PlanetData> =
        this.cache.getPlanetData(id);

      if (existingPlanetData) {
        data = existingPlanetData;
      } else {
        ({ data } = await this.api.get<PlanetData>(`planets/${id}`));

        data.id = getIdFromUrl(data.url);

        this.cache.addPlanetData(id, data);
      }

      const planet = Planet.from(data);

      this.cache.addPlanet(id, planet);

      return planet;
    } catch (error) {
      this.handleError(error);
    }

    return null;
  }

  public handleError(error: unknown): void {
    if (axios.isAxiosError(error)) {
      console.error("API Error", error);
    } else {
      console.error("Unexpected Error", error);
    }
  }

  public resetCache(): void {
    this.cache.reset();
  }
}

// "https://swapi.dev/api/" - SSL Certificate expired 21/11/2021

export const API_CONFIGURATION = {
  baseURL: "https://swapi.dev/api/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
} as const;

const apiInstance = axios.create(API_CONFIGURATION);

export default new StarWarsApi(apiInstance);
