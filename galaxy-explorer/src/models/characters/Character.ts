import { CharacterData } from "@/models/characters";
import { formatIsoDate } from "@/utils/date";

export class Character {

  public readonly created: string;

  public readonly edited: string;

  public readonly height: string;

  public readonly homeworld: string;

  public readonly mass: string;

  public readonly name: string;

  constructor(data: CharacterData) {
    this.created = formatIsoDate(data.created);

    this.edited = formatIsoDate(data.edited);

    this.height = data?.height ?? "Unknown";

    this.homeworld = data?.homeworld ?? "Unknown";

    this.mass = data?.mass ?? "Unknown";

    this.name = data?.name ?? "Unknown";
  }
}