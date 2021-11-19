<template>
  <ul class="character-list">
    <li class="character-list__header-row">
      <div class="list__row">
        <div class="column">
          <span>Name</span>
        </div>
        <div class="column">
          <span>Height (cm)</span>
        </div>
        <div class="column">
          <span>Mass (kg)</span>
        </div>
        <div class="column">
          <span>Created</span>
        </div>
        <div class="column">
          <span>Edited</span>
        </div>
        <div class="column">
          <span>Homeworld</span>
        </div>
      </div>
    </li>
    <li v-for="character of characters" :key="character.id">
      <CharacterListRow :character="character" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.list__row {
  display: grid;
  grid-template-columns: repeat(6, minmax(10em, 1fr));
}

.character-list {
  margin: 0;
  padding: 0;
  border: var(--base-border-style);
  list-style: none;
}

.character-list__header-row {
  border-bottom: var(--base-border-style);

  span {
    font-weight: 600;
  }
}

.column {
  padding: var(--base-spacing--quarter) var(--base-spacing--half);
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CharacterListRow from "@/components/character-explorer/CharacterListRow.vue";
import { CharacterData } from "@/models/characters";

@Options({
  components: {
    CharacterListRow,
  },
  props: {
    characters: {
      required: true,
      type: Array,
    },
  },
})
export default class CharacterList extends Vue {
  characters!: Array<CharacterData>;
}
</script>
