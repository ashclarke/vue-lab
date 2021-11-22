<template>
  <div class="list__row">
    <div class="column">
      <span>{{ character?.name ?? "-" }}</span>
    </div>
    <div class="column column--numeric">
      <span>{{ character?.height ?? "-" }}</span>
    </div>
    <div class="column column--numeric">
      <span>{{ character?.mass ?? "-" }}</span>
    </div>
    <div class="column column--date">
      <span>{{ character?.created ?? "-" }}</span>
    </div>
    <div class="column column--date">
      <span>{{ character?.edited ?? "-" }}</span>
    </div>
    <div class="column column--link">
      <span @click="selectPlanet(character.homeworldId)">
        {{ character?.homeworld?.name ?? "-" }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list__row {
  display: grid;
}

.column {
  padding: var(--base-spacing--quarter) var(--base-spacing--half);
  font-variant-numeric: tabular-nums;

  & + .column {
    border-left: var(--base-border-style);
  }

  &:last-child span {
    font-weight: 700;
    cursor: pointer;

    &:hover {
      color: rgba(140, 140, 140);
    }
  }
}

.column--date,
.column--numeric {
  text-align: right;
}

.column--link {
  text-align: center;
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
    this.store?.dispatch("selectPlanet", planetId);
  }
}
</script>
