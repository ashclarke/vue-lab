<template>
  <button class="button" type="button" @click="onClick">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    text: {
      required: true,
      type: String,
    },
  },
})
export default class Button extends Vue {
  onClick!: () => void;
  text!: string;
}
</script>
