<template>
  <PlanetViewer :planet="planet" v-show="!!planet" />
  <CharacterExplorer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { useStore, Store } from "vuex";

import { computed, ComputedRef } from "vue";

import CharacterExplorer from "@/components/character-explorer/CharacterExplorer.vue";

import PlanetViewer from "@/components/planet-viewer/PlanetViewer.vue";

import { Planet } from "@/models/planets";

import { AppState } from "@/store";

@Options({
  components: {
    CharacterExplorer,
    PlanetViewer,
  },
})
export default class Characters extends Vue {
  planet?: ComputedRef<Planet | null | undefined>;

  store?: Store<AppState>;

  setup() {
    const store: Store<AppState> = useStore();

    return {
      planet: computed(() => store?.state?.selectedPlanet),
    };
  }
}
</script>
