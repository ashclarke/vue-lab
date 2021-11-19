<template>
  <ul class="character-list">
    <li v-for="character of characters" :key="character.id">
      <CharacterListRow :character="character" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.character-list {
  margin: 0;
  border: var(--base-border-style);
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
