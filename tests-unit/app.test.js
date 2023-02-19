const request = require("supertest");
const app = require("../src/app");
const poke = require("../src/pokemon");

describe("GET /", () => {
  test("Return hello world", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("Hello world");
      });
  });
});

const mockPokemon1 = {
  name: "Pokemon 1",
  types: [{ slot: 1, type: { name: "Type name" } }],
};
const mockPokemon2 = {
  name: "Pokemon 2",
  types: [{ slot: 1, type: { name: "Type name" } }],
  abilities: [{ ability: { name: "Ability name" } }],
  weight: 40,
};

jest.mock("../src/pokemon");
poke.GetDailyPokemonV1.mockReturnValue(mockPokemon1);
poke.GetDailyPokemonV2.mockReturnValue(mockPokemon2);

describe("GET /pokemon-of-the-day", () => {
  test("Version header 1 returns name and type", () => {
    return request(app)
      .get("/pokemon-of-the-day")
      .set("Version", "1")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(mockPokemon1.name);
        expect(response.body.types).toStrictEqual(mockPokemon1.types);
      });
  });

  test("Version header 2 returns as version 1 plus abilities and weight", () => {
    return request(app)
      .get("/pokemon-of-the-day")
      .set("Version", "2")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(mockPokemon2.name);
        expect(response.body.types).toStrictEqual(mockPokemon2.types);
        expect(response.body.abilities).toStrictEqual(mockPokemon2.abilities);
        expect(response.body.weight).toBe(mockPokemon2.weight);
      });
  });

  test("Version header missing returns status code 500", () => {
    return request(app)
      .get("/pokemon-of-the-day")
      .then((response) => {
        expect(response.statusCode).toBe(500);
      });
  });

  test("Version header over 2 returns status code 500", () => {
    return request(app)
      .get("/pokemon-of-the-day")
      .set("Version", "3")
      .then((response) => {
        expect(response.statusCode).toBe(500);
      });
  });
});
