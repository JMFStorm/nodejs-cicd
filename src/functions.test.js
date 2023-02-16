const { GetRandomNumber } = require("./functions");

test("GetRandomNumber() returns a number", () => {
  const result = GetRandomNumber();
  expect(result).toBeDefined();
  expect(typeof result).toBe("number");
});
