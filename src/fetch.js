const axios = require("axios");

const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";

async function FetchPokemonByIndex(index) {
  const response = await axios.get(pokeUrl + index);
  return response.data;
}

module.exports = { FetchPokemonByIndex };
