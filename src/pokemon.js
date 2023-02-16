const { FetchPokemonByIndex } = require("./fetch");
const { GetRandomNumberOfTheDay } = require("./functions");

const maxPokeIndex = 1000;

async function GetDailyPokemonV1() {
  const seedNum = GetRandomNumberOfTheDay(maxPokeIndex);
  const pokemon = await FetchPokemonByIndex(seedNum);
  const result = { name: pokemon.name, types: pokemon.types };
  return result;
}

async function GetDailyPokemonV2() {
  const seedNum = GetRandomNumberOfTheDay(maxPokeIndex);
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
