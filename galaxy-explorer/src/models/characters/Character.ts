import { CharacterData } from "@/models/characters";

import { Planet } from "@/models/planets";

import { formatIsoDate } from "@/utils/date";

import { UNKNOWN } from "@/utils/messaging";

export class Character {
  public readonly created: string;

  public readonly edited: string;

  public readonly height: string;

  public readonly id: number;

  private homeworldPlanet: Planet | null = null;

  public readonly homeworldId: number;

  public readonly mass: string;

  public readonly name: string;

  constructor(data: CharacterData) {
    this.created = formatIsoDate(data.created);

    this.edited = formatIsoDate(data.edited);

    this.height = data?.height ?? UNKNOWN;

    this.id = data?.id ?? -1;

    if (this.id < 0) {
      throw new Error("Character #constructor: Id provided is invalid.");
    }

    this.homeworldId = data?.homeworldId ?? -1;

    this.mass = data?.mass ?? UNKNOWN;

    this.name = data?.name ?? UNKNOWN;
  }

  public get homeworld(): Planet | null {
    return this.homeworldPlanet;
  }

  public static from(data: CharacterData): Character {
    return new Character(data);
  }

  public setHomeworld(planet?: Planet) {
    if (!planet) {
      return;
    }

    this.homeworldPlanet = planet;
  }
}
