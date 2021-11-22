<template>
  <div class="content">
    <Header></Header>
    <div class="view">
      <router-view />
    </div>
  </div>
  <PlanetViewer :planet="planet" v-show="!!planet" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { mapGetters } from "vuex";

import Header from "@/components/core/Header.vue";

import PlanetViewer from "@/components/planet-viewer/PlanetViewer.vue";

import { Planet } from "@/models/planets";

@Options({
  components: {
    Header,
    PlanetViewer,
  },
  computed: {
    ...mapGetters({
      planet: "getSelectedPlanet",
    }),
  },
})
export default class App extends Vue {
  planet?: Planet | null | undefined;
}
</script>

<style lang="scss">
.content {
  background-color: var(--base-background-color--dimmed);

  .view {
    margin: var(--base-spacing);
    padding: var(--base-spacing);
    background-color: var(--base-background-color);
    border: var(--base-border-style);
  }
}
</style>
