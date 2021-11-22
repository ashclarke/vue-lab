<template>
  <header>
    <h1>Galaxy Explorer</h1>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/characters">Characters</router-link>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  padding: var(--base-spacing--half);
  background-color: var(--header-background-color);
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;

  h1 {
    margin: 0;
    color: var(--header-text-color);
  }
}

nav {
  color: var(--header-text-color);

  a {
    color: var(--header-text-color);
    text-decoration: none;

    &:hover {
      color: var(--header-text-color--hover);
    }

    &.router-link-exact-active {
      color: var(--header-text-color--active);
    }
  }
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {}
</script>
