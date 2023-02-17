const axios = require("axios");

const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";

async function FetchPokemonByIndex(index) {
  let response;
  try {
    response = await axios.get(pokeUrl + index);
  } catch (error) {
    console.log("error", error);
  }
  return response.data;
}

module.exports = { FetchPokemonByIndex };
