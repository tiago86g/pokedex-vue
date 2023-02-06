<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav :class="$style['main-menu']">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<style lang="postcss" module>
.main-menu {
}
</style>
