const { GetCurrentDay, GetRandomNumberOfTheDay } = require("../src/functions");

describe("GetCurrentDay()", () => {
  test("Returns a number", () => {
    const result = GetCurrentDay();
    expect(result).toBeDefined();
    expect(typeof result).toBe("number");
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(32);
  });
});

describe("GetRandomNumberOfTheDay()", () => {
  test("Without parameter returns a positive number", () => {
    const result = GetRandomNumberOfTheDay();
    expect(result).toBeDefined();
    expect(typeof result).toBe("number");
    expect(result).toBeGreaterThanOrEqual(0);
  });

  test("With limiter never exceeds limit", () => {
    const result = [];
    const limit = 100;
    const maxSteps = 1000;
    for (let i = 0; i < maxSteps; i++) {
      result.push(GetRandomNumberOfTheDay(limit));
    }
    expect(result.length).toEqual(maxSteps);
    const maxValue = result.reduce((a, b) => Math.max(a, b), 0);
    expect(maxValue).toBeDefined();
    expect(maxValue).toBeLessThanOrEqual(limit);
  });

  test("Returns the same number for the current day", () => {
    const first = GetRandomNumberOfTheDay();
    expect(first).toBeDefined();
    expect(typeof first).toBe("number");
    expect(first).toBeGreaterThanOrEqual(0);
    for (let i = 0; i < 100; i++) {
      expect(GetRandomNumberOfTheDay()).toBe(first);
    }
  });
});
