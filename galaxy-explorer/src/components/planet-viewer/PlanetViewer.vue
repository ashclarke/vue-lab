<template>
  <div class="planet-viewer">
    <div class="planet-detail">
      <h3>{{ planet?.name ?? "-" }}</h3>
      <span>Population: {{ planet?.population ?? "-" }}</span>
      <span>Diameter: {{ planet?.diameter ?? "-" }}</span>
      <span>Climate: {{ planet?.climate ?? "-" }}</span>
      <Button @click="close()" text="Close" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.planet-viewer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
  z-index: 10;
  background-color: var(--overlay-background-color);
  backdrop-filter: blur(2px);
}

.planet-detail {
  width: 24rem;
  height: auto;
  padding: var(--base-spacing);
  display: grid;
  grid-template-rows: 1fr repeat(4, 2rem);
  text-align: center;
  background-color: var(--base-background-color);
  box-shadow: 0px 0px 0.3px rgba(0, 0, 0, 0.011),
    0px 0px 0.8px rgba(0, 0, 0, 0.016), 0px 0px 1.5px rgba(0, 0, 0, 0.02),
    0px 0px 2.7px rgba(0, 0, 0, 0.024), 0px 0px 5px rgba(0, 0, 0, 0.029),
    0px 0px 12px rgba(0, 0, 0, 0.04), 0.2px 0.2px 0.3px rgba(0, 0, 0, 0.02),
    0.4px 0.4px 0.8px rgba(0, 0, 0, 0.028),
    0.8px 0.8px 1.5px rgba(0, 0, 0, 0.035),
    1.3px 1.3px 2.7px rgba(0, 0, 0, 0.042), 2.5px 2.5px 5px rgba(0, 0, 0, 0.05),
    6px 6px 12px rgba(0, 0, 0, 0.07);

  h3 {
    margin: var(--base-spacing) 0;
  }

  button {
    width: 4rem;
    margin: 0 auto;
  }
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { useStore, Store } from "vuex";

import Button from "@/components/core/Button.vue";

import { Planet } from "@/models/planets";

import { AppState } from "@/store";

@Options({
  components: {
    Button,
  },
  props: {
    planet: {
      type: Planet,
    },
  },
})
export default class PlanetViewer extends Vue {
  planet?: Planet;

  store?: Store<AppState>;

  created() {
    const store: Store<AppState> = useStore();

    this.store = store;
  }

  close() {
    this.store?.dispatch("selectPlanet", null);
  }
}
</script>
