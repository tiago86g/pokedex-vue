<template>
  <form>
    <input
      placeholder="test"
      @input.prevent="(e) => handleChange(e)"
      @keyup.delete="(e) => handleDelete(e)"
    />
  </form>
  {{ pokemons.length }}
  <div :class="$style['pokemons-list']">
    <div v-for="(pokemon, index) in pokemons" :key="index">
      <PokemonItem
        :id="pokemon.id.toString()"
        :image="
          pokemon.sprites.other.dream_world.front_default ??
          pokemon.sprites.other?.['official-artwork'].front_default ??
          pokemon.sprites.front_default
        "
        :name="
          pokemon.name.toUpperCase() ??
          highlightSearchedText(searchKey, pokemon.name)
        "
      />
    </div>
  </div>
  <p v-if="!pokemons">{{ error }}</p>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import useFetch from "../data/useFetch";
import PokemonItem from "../components/pokemon-list/PokemonItem.vue";
import type { Pokemon, PokemonType } from "@/types";
import { PokemonTypeName } from "@/types";
import { highlightSearchedText } from "../utils/highlightText";

const pokemonsBase = ref<Pokemon[]>([]);
const pokemons = ref<Pokemon[] | []>(pokemonsBase?.value);
const error = ref();
const searchKey = ref<string>("");

async function loadPokemons() {
  try {
    const response = await useFetch.getPokemonList();
    response.results.map(
      async (pokemon: { name: string; url: string }, index: number) => {
        const pokemonData: Pokemon = await useFetch.getPokemonById(
          `${index + 1}`
        );
        try {
          pokemonsBase.value.push(pokemonData);
          console.log(pokemonData.types);
        } catch (err) {
          console.log(err);
          error.value = err;
        }
      }
    );
    console.log(pokemonsBase.value);

    return;
  } catch (err) {
    console.error(err);
    error.value = err;
    return;
  }
}

onMounted(async () => {
  loadPokemons();
});

function searchPokemons(searchKey: string, list: Pokemon[]) {
  const filteredList: Pokemon[] = [];
  list?.filter((pokemon: Pokemon) => {
    if (pokemon.name.includes(searchKey)) filteredList.push(pokemon);
  });
  pokemons.value = filteredList;
}

function filterPerType(pokemonTypes: PokemonType) {
  switch (pokemonTypes.type) {
    case PokemonTypeName.bug:
      break;

    default:
      break;
  }
}

function handleChange(event: any) {
  searchKey.value = event.target.value;
  searchPokemons(searchKey.value, pokemons.value);
}

function handleDelete(event: any) {
  searchKey.value = event.target.value;
  searchPokemons(searchKey.value, pokemonsBase.value);
}
</script>

<style module>
.text {
}
.pokemons-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
}
.search-bar {
  width: 100%;
}
</style>
