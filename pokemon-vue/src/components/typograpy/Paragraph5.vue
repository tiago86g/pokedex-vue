<template>
  <component
    :is="tag"
    :class="$style['paragraph-5']"
    :style="`--color: ${color}`"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { typographyProps } from "./typograpyProps";

defineProps({
  ...typographyProps,
});
</script>

<style lang="postcss" module>
.paragraph-5 {
  font: var(--font-100);
  color: var(--color, currentColor);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
}
</style>
