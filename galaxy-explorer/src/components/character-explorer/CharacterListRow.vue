<template>
  <div class="list__row">
    <div class="column">
      <span>{{ character?.name ?? "-" }}</span>
    </div>
    <div class="column">
      <span>{{ character?.height ?? "-" }}</span>
    </div>
    <div class="column">
      <span>{{ character?.mass ?? "-" }}</span>
    </div>
    <div class="column">
      <span>{{ character?.created ?? "-" }}</span>
    </div>
    <div class="column">
      <span>{{ character?.edited ?? "-" }}</span>
    </div>
    <div class="column">
      <span @click="selectPlanet(character.homeworldId)">
        {{ character?.homeworld?.name ?? "-" }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list__row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.column {
  padding: var(--base-spacing--quarter) var(--base-spacing--half);
  font-variant-numeric: tabular-nums;

  & + .column {
    border-left: var(--base-border-style);
  }

  &:last-child span {
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: rgba(90, 90, 90);
    }
  }
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { useStore, Store } from "vuex";

import { AppState } from "@/store";

import { Character } from "@/models/characters";

@Options({
  props: {
    character: {
      required: true,
      type: Character,
    },
  },
})
export default class CharacterListRow extends Vue {
  character?: Character = undefined;

  store?: Store<AppState> = undefined;

  created() {
    const store: Store<AppState> = useStore();

    this.store = store;
  }

  selectPlanet(planetId: number) {
    this.store?.commit("selectPlanet", planetId);
  }
}
</script>
