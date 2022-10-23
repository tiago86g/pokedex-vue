<template>
  <Container>
    <p :class="$style['text']">Home view test vad</p>
    <div :class="$style['pokemons-list']">
      <PokemonItem
        v-for="(pokemon, index) in pokemons.results"
        :key="index"
        :id="index + 1"
        :url="pokemon.url"
        :name="pokemon.name"
      />
    </div>
    <p v-if="!pokemons">{{ error }}</p>
  </Container>
</template>

<script async setup lang="ts">
import Container from '../components/layout/Container.vue';
import { ref } from 'vue';
import useFetch from '../data/useFetch';
import PokemonItem from '../components/pokemon-list/pokemonItem.vue';

const pokemons = ref();
const error = ref();

const loadPokemons = async () => {
  try {
    const response = await useFetch.getAllPokemons();
    pokemons.value = response.data;
  } catch (err) {
    error.value = err;
  }
};
loadPokemons();
</script>

<style lang="postcss" module>
.text {
}
.pokemons-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
}
</style>
