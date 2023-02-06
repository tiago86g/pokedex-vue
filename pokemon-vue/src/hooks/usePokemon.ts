import type { Pokemon } from "../types";

export const usePokemon = (pokemon: Pokemon) => {
  return {
    ...pokemon,
    pokemonImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`,
    name: pokemon.name,
  };
};
