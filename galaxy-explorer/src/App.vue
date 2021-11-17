<template>
  <div class="content">
    <Header></Header>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Header from "@/components/core/Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body,
#app,
.content {
  height: 100vh;
}

.content {
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: var(--base-background-color--dimmed);

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
    a {
      color: var(--header-text-color);

      &:hover {
        color: var(--header-text-color--hover);
      }

      &.router-link-exact-active {
        color: var(--header-text-color--active);
      }
    }
  }

  .view {
    margin: var(--base-spacing);
    padding: var(--base-spacing);
    background-color: var(--base-background-color);
    border: var(--base-border-style);
  }
}
</style>
