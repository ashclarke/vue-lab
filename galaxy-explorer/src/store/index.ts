import { createStore } from "vuex";

import { Planet } from "@/models/planets";

import StarWarsApi from "@/models/apis/StarWarsApi";

const appState: AppState = {
  selectedPlanet: null,
};

export default createStore({
  state: appState,
  mutations: {
    async selectPlanet(state: AppState, planetId: number | null) {
      if (planetId === null) {
        state.selectedPlanet = null;

        return;
      }

      state.selectedPlanet = await StarWarsApi.getPlanet(planetId);
    },
  },
  actions: {},
  modules: {},
});

export type AppState = {
  selectedPlanet: Nullable<Planet>;
};
