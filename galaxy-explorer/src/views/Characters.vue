<template>
  <CharacterExplorer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CharacterExplorer from "@/components/character-explorer/CharacterExplorer.vue";

@Options({
  components: {
    CharacterExplorer,
  },
})
export default class Characters extends Vue {}
</script>
