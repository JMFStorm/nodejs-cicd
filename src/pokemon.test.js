const { FetchDailyPokemonV1, FetchDailyPokemonV2 } = require("./pokemon");

test("FetchDailyPokemonV1() returns the name", () => {
  const result = FetchDailyPokemonV1();
  expect(result).toBeDefined();
  expect(typeof result).toBe("string");
});

test("FetchDailyPokemonV2() return the name and type", () => {
  const result = FetchDailyPokemonV2();
  expect(result).toBeDefined();
  expect(result.name).toBeDefined();
  expect(result.type).toBeDefined();
  expect(typeof result.name).toBe("string");
  expect(typeof result.type).toBe("string");
});
