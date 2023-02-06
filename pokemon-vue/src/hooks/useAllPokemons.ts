import useFetch from "@/data/useFetch";
import type { Pokemon } from "@/types";
import { ref } from "vue";

export async function useAllPokemons() {
  const pokemonsBase = ref<Pokemon[] | { name: string; url: string }>([]);
  try {
    const pokemonList = await useFetch.getPokemonList();
    pokemonsBase.value = pokemonList;
    console.log(pokemonsBase.value);

    return pokemonsBase;
    // pokemonList.result.map((pokemon) => {
    //   useFetch.getPokemonById();
    //   return {};
    // });
  } catch (err) {
    console.error(err);
    return;
  }
}
