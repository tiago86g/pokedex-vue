<template>
  <div :class="$style['container']">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="postcss" module>
.container {
  height: 100%;
  padding: 0 20px;
}
</style>
