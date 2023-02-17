const axios = require("axios");

const baseUrl = "http://localhost:3000/";

describe("GET /pokemon-of-the-day", () => {
  test("Version header 1 returns name and types", async () => {
    const url = baseUrl + "pokemon-of-the-day";
    let res;
    try {
      res = await axios.get(url, {
        headers: {
          Version: "1",
        },
      });
    } catch (error) {
      console.log("error", error);
    }
    const result = res.data;
    expect(result).toBeDefined();
    expect(result.name).toBeDefined();
    expect(typeof result.name).toBe("string");
    expect(result.types).toBeDefined();
    expect(typeof result.types).toBe("object");
  });

  test("Version header 2 returns as version 1 plus abilities and weight", async () => {
    const url = baseUrl + "pokemon-of-the-day";
    let res;
    try {
      res = await axios.get(url, {
        headers: {
          Version: "2",
        },
      });
    } catch (error) {
      console.log("error", error);
    }
    const result = res.data;
    expect(result).toBeDefined();
    expect(result.name).toBeDefined();
    expect(typeof result.name).toBe("string");
    expect(result.types).toBeDefined();
    expect(typeof result.types).toBe("object");
    expect(result.abilities).toBeDefined();
    expect(typeof result.types).toBe("object");
    expect(result.weight).toBeDefined();
    expect(typeof result.weight).toBe("number");
  });
});
