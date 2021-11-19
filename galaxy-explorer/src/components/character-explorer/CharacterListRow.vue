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
      <span @click="selectPlanet(character.homeworld)">
        {{ character?.homeworld?.name ?? "-" }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.column {
  display: grid;
  grid-template-columns: minmax(10em, 1fr);
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { Character } from "@/models/characters";

import { Planet } from "@/models/planets";

@Options({
  props: {
    character: {
      required: true,
      type: Character,
    },
  },
})
export default class CharacterListRow extends Vue {
  character!: Character;

  selectPlanet(planet: Planet) {
    console.log(planet);
  }
}
</script>
