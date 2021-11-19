<template>
  <div class="character-explorer">
    <Searchbar />
    <CharacterList :characters="characters" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CharacterList from "@/components/character-explorer/CharacterList.vue";

import Searchbar from "@/components/core/Searchbar.vue";

import StarWarsApi from "@/models/apis/StarWarsApi";

import { Character } from "@/models/characters";

@Options({
  components: {
    Searchbar,
    CharacterList,
  },
})
export default class CharacterExplorer extends Vue {
  characters: Character[] = [];

  created() {
    this.search();
  }

  data() {
    return {
      characters: null,
    };
  }

  async search(searchTerm?: string) {
    this.characters = await StarWarsApi.getCharacters(searchTerm);
  }

  setup() {
    this.search();
  }
}
</script>
