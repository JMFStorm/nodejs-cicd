const { GetDailyPokemonV1, GetDailyPokemonV2 } = require("./pokemon");

test("FetchDailyPokemonV1()", () => {
  const result = GetDailyPokemonV1();
  expect(result).toBeDefined();
});

test("FetchDailyPokemonV2() ", () => {
  const result = GetDailyPokemonV2();
  expect(result).toBeDefined();
});
