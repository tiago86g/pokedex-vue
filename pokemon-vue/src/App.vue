<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Container from "./components/layout/Container.vue";
</script>

<template>
  <Container>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </Container>
</template>
