import { PlanetData } from "@/models/planets";
import { UNKNOWN } from "@/utils/messaging";

export class Planet {
  public readonly climate: string;

  public readonly diameter: string;

  public readonly id: number;

  public readonly name: string;

  public readonly population: string;

  constructor(data: PlanetData) {
    this.climate = data?.climate ?? UNKNOWN;

    this.diameter = data?.diameter ?? UNKNOWN;

    this.id = data?.id ?? -1;

    if (this.id < 0) {
      throw new Error("Planet #constructor: Id provided is invalid.");
    }

    this.name = data?.name ?? UNKNOWN;

    this.population = data?.population ?? UNKNOWN;
  }

  public static from(data: PlanetData): Planet {
    return new Planet(data);
  }
}
