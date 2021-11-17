<template>
  <div class="list__row">
    <div class="column">
      <span>{{ character.name }}</span>
    </div>
    <div class="column">
      <span>{{ character.height }}</span>
    </div>
    <div class="column">
      <span>{{ character.mass }}</span>
    </div>
    <div class="column">
      <span>{{ character.created }}</span>
    </div>
    <div class="column">
      <span>{{ character.edited }}</span>
    </div>
    <div class="column">
      <span @click="selectPlanet(character.planet)">
        {{ character.planet }}
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
import { Vue } from "vue-class-component";

import { CharacterData } from "@/models/characters";

export default class CharacterListRow extends Vue {
  character!: CharacterData;
}
</script>