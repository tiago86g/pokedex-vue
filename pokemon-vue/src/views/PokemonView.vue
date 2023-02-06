<template>
  <Container v-if="pokemon" :class="$style['box']">
    {{ pokemon.name }}
    <img
      :alt="pokemon.name"
      :src="pokemon.pokemonImage"
      height="100"
      width="100"
    />
  </Container>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import useFetch from "../data/useFetch";
import { onMounted, ref } from "vue";
import { usePokemon } from "../hooks/usePokemon";
import type { Pokemon } from "@/types";
import Container from "../components/layout/Container.vue";

const route = useRoute();
const pokemonId = route.params.id.toString();
const pokemon = ref<Pokemon>();
const error = ref();

onMounted(() => {
  const loadPokemon = async () => {
    try {
      const response = await useFetch.getPokemonById(pokemonId);
      pokemon.value = usePokemon(response);
      console.log(pokemon.value);
      return;
    } catch (err) {
      console.error(err);
      error.value = err;
      return;
    }
  };
  loadPokemon();
});
</script>

<style module>
.box {
  height: 200px;
  background-color: lightblue;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 2px 25px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.image {
  width: 50%;
  height: 50%;
}
</style>
