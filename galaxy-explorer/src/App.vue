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
.content {
  background-color: var(--base-background-color--dimmed);

  .view {
    margin: var(--base-spacing);
    padding: var(--base-spacing);
    background-color: var(--base-background-color);
    border: var(--base-border-style);
  }
}
</style>
