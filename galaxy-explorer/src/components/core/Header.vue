<template>
  <header>
    <h1>Galaxy Explorer</h1>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/characters">Characters</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {}
</script>
