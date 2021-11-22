import { AxiosInstance } from "axios";

import { API_CONFIGURATION, StarWarsApi } from "@/models/apis";

import { Character, CharacterData } from "@/models/characters";

import { PlanetData } from "@/models/planets";

import people from "../../../tests/fixtures/people";

import planets from "../../../tests/fixtures/planets";

import mockedAxios from "../../../tests/mocks/axios";

describe("StarWarsApi", () => {
  let apiInstance: AxiosInstance | null;

  beforeEach(() => {
    apiInstance = mockedAxios.create(API_CONFIGURATION);
  });

  afterEach(() => {
    apiInstance = null;
  });

  it("should get a list of people", async () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- it is set in `beforeEach`
    const api = new StarWarsApi(apiInstance!);

    mockedAxios.get.mockImplementation((url: string) => {
      let response;

      if (url.endsWith("people")) {
        response = {
          data: people as { results: Array<CharacterData> },
        };
      } else if (url.endsWith("planets/1")) {
        response = {
          data: planets.results[0] as PlanetData,
        };
      } else if (url.endsWith("planets/21")) {
        response = {
          data: planets.results[1] as PlanetData,
        };
      }

      return Promise.resolve(response);
    });

    const characters = await api.getCharacters();

    expect(mockedAxios.get).toHaveBeenCalledWith("people");

    const owen = characters[0];

    expect(owen).toBeInstanceOf(Character);

    expect(owen).toMatchObject({
      created: "10/12/2014",
      edited: "20/12/2014",
      name: "Owen Lars",
      height: "178",
      homeworldId: 1,
      mass: "120",
    });

    const wilhuff = characters[1];

    expect(wilhuff).toBeInstanceOf(Character);

    expect(wilhuff).toMatchObject({
      created: "10/12/2014",
      edited: "20/12/2014",
      name: "Wilhuff Tarkin",
      height: "180",
      homeworldId: 21,
      mass: "unknown",
    });

    expect(mockedAxios.get).toHaveBeenCalledWith("planets/1");

    expect(mockedAxios.get).toHaveBeenCalledWith("planets/21");
  });
});
