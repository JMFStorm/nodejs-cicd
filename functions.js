const pokemonList = [
  { name: "bulbasaur", type: "grass" },
  { name: "ivysaur", type: "grass" },
  { name: "venusaur", type: "grass" },
  { name: "charmander", type: "fire" },
  { name: "charmeleon", type: "fire" },
  { name: "charizard", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "wartortle", type: "water" },
  { name: "blastoise", type: "water" },
  { name: "caterpie", type: "bug" },
  { name: "metapod", type: "bug" },
  { name: "butterfree", type: "bug" },
  { name: "pikachu", type: "electric" },
  { name: "raichu", type: "electric" },
];

function GetDateSeedNum() {
  const now = new Date();
  return now.getDate();
}

function GetPokemonNum(number) {
  return pokemonList[number % pokemonList.length];
}

function GetDailyPokemon() {
  const seedNum = GetDateSeedNum();
  const pokemon = GetPokemonNum(seedNum);
  return pokemon;
}

function FetchDailyPokemonV1() {
  const pokemon = GetDailyPokemon();
  return pokemon.name;
}

function FetchDailyPokemonV2() {
  const pokemon = GetDailyPokemon();
  return pokemon;
}

module.exports = { FetchDailyPokemonV1, FetchDailyPokemonV2 };
