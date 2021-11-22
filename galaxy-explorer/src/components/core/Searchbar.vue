<template>
  <div class="searchbar">
    <label>
      <span>Search</span>
      <input type="text" v-model="searchTerm" />
    </label>
    <Button text="Go" :onClick="search" />
  </div>
</template>

<style scoped lang="scss">
.searchbar {
  padding: var(--base-spacing--half);
  display: grid;
  grid-template-columns: 1fr auto;
  border: var(--base-border-style);
  border-bottom: 0;

  label {
    display: flex;
    align-items: center;

    input {
      flex: 1 1 auto;
    }
  }

  label + button {
    margin-left: var(--base-spacing--half);
  }
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Button from "@/components/core/Button.vue";

@Options({
  components: {
    Button,
  },
  props: {
    onSearch: {
      required: true,
      type: Function,
    },
  },
})
export default class Searchbar extends Vue {
  onSearch!: (searchTerm: string) => void;

  searchTerm = "";

  search() {
    this.onSearch(this.searchTerm);
  }
}
</script>
