import { PlanetData } from "@/models/planets";

export class Planet {
    public readonly climate: string;

    public readonly diameter: string;

    public readonly name: string;

    public readonly population: string;

    constructor(data: PlanetData) {
        this.climate = data?.climate ?? "Unknown";

        this.diameter = data?.diameter ?? "Unknown";

        this.name = data?.name ?? "Unknown";

        this.population = data?.population ?? "Unknown";
    }
}