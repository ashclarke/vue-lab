<template>
  <div class="character-explorer">
    <Searchbar />
    <CharacterList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CharacterList from "@/components/character-explorer/CharacterList.vue";
import Searchbar from "@/components/core/Searchbar.vue";

@Options({
  components: {
    Searchbar,
    CharacterList,
  },
})
export default class CharacterExplorer extends Vue {}
</script>
