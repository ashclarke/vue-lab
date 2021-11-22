import { Character, CharacterData } from "@/models/characters";
import { Planet, PlanetData } from "@/models/planets";

type RawDataCache = {
  people: Map<string, Array<CharacterData>>;
  planets: Map<number, PlanetData>;
};

/*
 * SWAPI SSL certificate expired on 21/11/2021, so for now we import the test data into the API
 * cache.
 */
import people from "../../../tests/fixtures/people";
import planets from "../../../tests/fixtures/planets";

// Switches to test data if the API is down
const IS_SWAPI_WORKING = true;

export class StarWarsApiCache {
  private readonly characters: Map<number, Character>;

  private readonly planets: Map<number, Planet>;

  private readonly raw: RawDataCache;

  constructor() {
    this.characters = new Map();

    this.planets = new Map();

    if (!IS_SWAPI_WORKING) {
      /*
       * SWAPI SSL certificate expired on 21/11/2021, so for now we set the test data to represent
       * API data here
       */
      const searchResult = people.results[1];

      this.raw = {
        people: new Map([
          ["", people.results],
          ["wi", [searchResult]],
        ]),
        planets: new Map([
          [planets.results[0].id, planets.results[0]],
          [planets.results[1].id, planets.results[1]],
        ]),
      };
    } else {
      this.raw = {
        people: new Map(),
        planets: new Map(),
      };
    }
  }

  public addCharacter(id: number, character: Character) {
    return this.characters.set(id, character);
  }

  public addPlanet(id: number, planet: Planet) {
    return this.planets.set(id, planet);
  }

  public addPlanetData(id: number, data: PlanetData) {
    return this.raw.planets.set(id, data);
  }

  public addPeopleData(searchTerm: string, data: Array<CharacterData>) {
    return this.raw.people.set(searchTerm, data);
  }

  public getCharacter(id: number): Possibly<Character> {
    if (!this.characters.has(id)) {
      return;
    }

    return this.characters.get(id);
  }

  public getPeopleData(searchTerm: string): Possibly<Array<CharacterData>> {
    if (!this.raw.people.has(searchTerm)) {
      return;
    }

    return this.raw.people.get(searchTerm);
  }

  public getPlanet(id: number): Possibly<Planet> {
    if (!this.planets.has(id)) {
      return;
    }

    return this.planets.get(id);
  }

  public getPlanetData(id: number): Possibly<PlanetData> {
    if (!this.raw.planets.has(id)) {
      return;
    }

    return this.raw.planets.get(id);
  }

  public reset(): void {
    this.characters.clear();

    this.planets.clear();

    this.raw.planets.clear();

    this.raw.people.clear();
  }
}
