import fetch from "./fetch";

export default {
  async getPokemonById(id: string) {
    const result = await fetch().get(`/${id}`);
    return result.data;
  },
  async getPokemonList() {
    const result = await fetch().get("/?limit=1009");
    return result.data;
  },
};
