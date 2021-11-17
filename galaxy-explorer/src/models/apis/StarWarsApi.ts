import axios, { AxiosInstance } from "axios";

import { Character, CharacterData } from "@/models/characters";

import { Planet, PlanetData } from "@/models/planets";

export class StarWarsApi {

  constructor(private api: AxiosInstance) {
    if (this.api === null) {
      throw new Error("StarWarsApi: `api` must not be `null`");
    }
  }

  public async getPeople(): Promise<Array<Character>> {
    try {
      const { data } = await this.api.get<Array<CharacterData>>("people");

      const characters: Array<Character> = (data ?? [])
        .map((person: CharacterData) => new Character(person));

      return characters;
    }
    catch (error) {
      this.handleError(error);
    }

    return [];
  }

  public async getPlanet(id: number): Promise<Planet | null> {
    if (id <= 0) {
      return null;
    }

    try {
      const { data } = await this.api.get<PlanetData>(`planet/${id}`);

      const planet = new Planet(data);

      return planet;
    }
    catch (error) {
      this.handleError(error)
    }

    return null;
  }

  public handleError(error: unknown): void {
    if (axios.isAxiosError(error)) {
      console.error("API Error", error);
    }
    else {
      console.error("Unexpected Error", error);
    }
  }
}

export const API_CONFIGURATION = {
  baseURL: "https://swapi.dev/api/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json"
  }
} as const;

const apiInstance = axios.create(API_CONFIGURATION);

export default new StarWarsApi(apiInstance);