import { Character, CharacterData } from "@/models/characters";
import { Planet, PlanetData } from "@/models/planets";

type RawDataCache = {
  people: Map<number, Array<CharacterData>>;
  planets: Map<number, PlanetData>;
};

export class StarWarsApiCache {
  public readonly characters: Map<number, Character>;

  public readonly planets: Map<number, Planet>;

  public readonly raw: RawDataCache;

  constructor() {
    this.characters = new Map();

    this.planets = new Map();

    this.raw = {
      people: new Map(),
      planets: new Map(),
    };
  }

  public reset(): void {
    this.characters.clear();

    this.planets.clear();

    this.raw.planets.clear();

    this.raw.people.clear();
  }
}
