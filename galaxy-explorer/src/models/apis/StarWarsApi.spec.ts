import { AxiosInstance } from "axios";

import { API_CONFIGURATION, StarWarsApi } from "@/models/apis/StarWarsApi";
import { Character, CharacterData } from "@/models/characters";

import * as people from "../../../tests/fixtures/people";

import mockedAxios from "../../../tests/mocks/axios";

describe("StarWarsApi", () => {
  let apiInstance: AxiosInstance | null;

  beforeEach(() => {
    apiInstance = mockedAxios.create(API_CONFIGURATION);
  });

  afterEach(() => {
    apiInstance = null;
  })

  it.only("should get a list of people", async () => {
    const api = new StarWarsApi(apiInstance!);

    mockedAxios.get.mockResolvedValueOnce({
      data: people.default as unknown as Array<CharacterData>
    });

    const characters = await api.getPeople();

    expect(mockedAxios.get).toHaveBeenCalledWith("people");

    const owen = characters[0];

    expect(owen).toBeInstanceOf(Character);

    expect(owen).toMatchObject({
      created: "10/12/2014",
      edited: "20/12/2014",
      name: "Owen Lars",
      height: "178",
      homeworld: "https://swapi.dev/api/planets/1/",
      mass: "120"
    });

    const wilhuff = characters[1];

    expect(wilhuff).toBeInstanceOf(Character);

    expect(wilhuff).toMatchObject({
      created: "10/12/2014",
      edited: "20/12/2014",
      name: "Wilhuff Tarkin",
      height: "180",
      homeworld: "https://swapi.dev/api/planets/21/",
      mass: "unknown"
    });
  });
});
