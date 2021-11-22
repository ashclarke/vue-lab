import { ActionContext, createStore } from "vuex";

import { Planet } from "@/models/planets";

import StarWarsApi from "@/models/apis/StarWarsApi";

const appState: AppState = {
  selectedPlanet: null,
};

export default createStore({
  state: appState,
  getters: {
    getSelectedPlanet: (state: AppState) => state.selectedPlanet,
  },
  mutations: {
    selectPlanet(state: AppState, planet: Planet) {
      if (planet === null) {
        state.selectedPlanet = null;

        return;
      }

      state.selectedPlanet = planet;
    },
  },
  actions: {
    async selectPlanet(
      context: ActionContext<AppState, AppState>,
      planetId: number | null
    ) {
      if (planetId == null) {
        context.commit("selectPlanet", null);
      } else {
        const planet = await StarWarsApi.getPlanet(planetId);

        context.commit("selectPlanet", planet);
      }
    },
  },
  modules: {},
});

export type AppState = {
  selectedPlanet: Nullable<Planet>;
};
