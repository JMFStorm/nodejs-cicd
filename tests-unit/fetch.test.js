const axios = require("axios");
const { FetchPokemonByIndex } = require("../src/fetch");

const mockPokemon = {
  name: "Pokemon 1",
  types: [{ slot: 1, type: { name: "Type name" } }],
  abilities: [{ ability: { name: "Ability name" } }],
  weight: 40,
};

const mockResponse = {
  data: mockPokemon,
};

jest.mock("axios");
axios.get.mockReturnValue(mockResponse);

test("FetchPokemonByIndex returns data", async () => {
  const index = 1;
  const result = await FetchPokemonByIndex(index);
  expect(result).toBeDefined();
  expect(typeof result).toBe("object");
});
