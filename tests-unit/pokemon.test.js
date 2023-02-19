const { GetDailyPokemonV1, GetDailyPokemonV2 } = require("../src/pokemon");
const fn = require("../src/functions");
const fetch = require("../src/fetch");

const mockPokemon = {
  name: "Pokemon 1",
  types: [{ slot: 1, type: { name: "Type name" } }],
  abilities: [{ ability: { name: "Ability name" } }],
  weight: 40,
};
jest.mock("../src/fetch");
fetch.FetchPokemonByIndex.mockReturnValue(mockPokemon);

jest.mock("../src/functions");
fn.GetRandomNumberOfTheDay.mockReturnValue(11);

test("FetchDailyPokemonV1() return name and types", async () => {
  const result = await GetDailyPokemonV1();
  expect(result).toBeDefined();
  expect(result.name).toBe(mockPokemon.name);
  expect(result.types).toStrictEqual(mockPokemon.types);
});

test("FetchDailyPokemonV2() return as version 1 plus abilities and weight", async () => {
  const result = await GetDailyPokemonV2();
  expect(result).toBeDefined();
  expect(result.name).toBe(mockPokemon.name);
  expect(result.types).toStrictEqual(mockPokemon.types);
  expect(result.abilities).toStrictEqual(mockPokemon.abilities);
  expect(result.weight).toBe(mockPokemon.weight);
});
