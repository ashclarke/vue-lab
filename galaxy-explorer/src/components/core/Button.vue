<template>
  <button class="button" type="button" @click="onClick()">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    text: String,
  },
})
export default class Button extends Vue {
  text!: string;

  public onClick() {
    console.log("click");
  }
}
</script>