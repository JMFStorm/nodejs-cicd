const axios = require("axios");
const { GetRandomNumber } = require("./functions");

const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
const maxPokeIndex = 1000;

async function FetchPokemonByIndex(index) {
  const response = await axios.get(pokeUrl + index);
  return response.data;
}

async function GetDailyPokemonV1() {
  const seedNum = GetRandomNumber(maxPokeIndex);
  const pokemon = await FetchPokemonByIndex(seedNum);
  const result = { name: pokemon.name, types: pokemon.types };
  return result;
}

async function GetDailyPokemonV2() {
  const seedNum = GetRandomNumber(maxPokeIndex);
  const pokemon = await FetchPokemonByIndex(seedNum);
  const result = {
    name: pokemon.name,
    types: pokemon.types,
    abilities: pokemon.abilities,
    weight: pokemon.weight,
  };
  return result;
}

module.exports = { GetDailyPokemonV1, GetDailyPokemonV2 };
