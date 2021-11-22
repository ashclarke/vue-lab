import { CharacterData } from "@/models/characters";

import { Planet } from "@/models/planets";

import { formatIsoDate } from "@/utils/date";

import { UNKNOWN } from "@/utils/messaging";

export class Character {
  public readonly created: string;

  public readonly edited: string;

  public readonly createdDate: Nullable<Date> = null;

  public readonly editedDate: Nullable<Date> = null;

  public readonly displayHeight: string;

  public readonly displayMass: string;

  public readonly height: Nullable<number>;

  public readonly id: number;

  private homeworldPlanet: Nullable<Planet> = null;

  public readonly homeworldId: number;

  public readonly mass: Nullable<number>;

  public readonly name: string;

  constructor(data: CharacterData) {
    this.created = formatIsoDate(data.created);

    this.edited = formatIsoDate(data.edited);

    if (this.created !== UNKNOWN) {
      this.createdDate = new Date(data.created);
    }

    if (this.edited !== UNKNOWN) {
      this.editedDate = new Date(data.edited);
    }

    this.height = parseInt(data?.height);

    if (Number.isNaN(this.height)) {
      this.height = null;

      this.displayHeight = UNKNOWN;
    } else {
      this.displayHeight = this.height.toString();
    }

    this.id = data?.id ?? -1;

    if (this.id < 0) {
      throw new Error("Character #constructor: Id provided is invalid.");
    }

    this.homeworldId = data?.homeworldId ?? -1;

    this.mass = parseInt(data?.mass);

    if (Number.isNaN(this.mass)) {
      this.mass = null;

      this.displayMass = UNKNOWN;
    } else {
      this.displayMass = this.mass.toString();
    }

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
