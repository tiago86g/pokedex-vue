import fetch from './fetch';

export default {
  async getPokemonById(id: string) {
    return await fetch().get(`/${id}`);
  },
  async getAllPokemons() {
    return await fetch().get('/?limit=649');
  },
};
