<template>
  <div class="home">
    <div class="hero">
      <h1>Welcome to Galaxy Explorer</h1>
      <router-link to="characters">Explore</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-rows: 1fr;
  background-image: url("../assets/img/background.jpg");
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;

  .hero {
    width: 80%;
    padding: var(--base-spacing);
    text-align: center;
    background: var(--hero-background-color);
    backdrop-filter: blur(4px);
    color: var(--hero-text-color);
    border-radius: 0.2rem;
    text-shadow: 0 0 0.4rem rgb(0, 0, 0, 0.3);
  }

  h1 {
    font-weight: 700;
    letter-spacing: 0.05rem;
  }

  a {
    font-size: 1.728rem;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--hero-link-color);
    transition: letter-spacing cubic-bezier(0.075, 0.82, 0.165, 1) 0.75s 0.15s;

    &:hover {
      color: var(--hero-link-color--hover);
      letter-spacing: 0.75rem;
    }
  }
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {}
</script>
