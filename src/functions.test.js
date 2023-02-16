const { GetDateAsNum } = require("./functions");

test("GetDateAsNum() returns a number", () => {
  const result = GetDateAsNum();
  expect(result).toBeDefined();
  expect(typeof result).toBe("number");
});

test("GetDateAsNum() returns the same number each time during the current day", () => {
  const result = [];
  const maxSteps = 100;
  for (let step = 0; step < maxSteps; step++) {
    result.push(GetDateAsNum());
  }
  expect(result.length).toEqual(maxSteps);
  const firstItem = result[0];
  for (let index = 0; index < maxSteps; index++) {
    const current = result[index];
    expect(current).toEqual(firstItem);
  }
});
