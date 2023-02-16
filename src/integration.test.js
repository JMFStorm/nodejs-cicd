const request = require("supertest");
const app = require("./app");

describe("/pokemon-of-the-day", () => {
  test("Version header missing returns status code 500", () => {
    return request(app)
      .get("/pokemon-of-the-day")
      .then((response) => {
        expect(response.statusCode).toBe(500);
      });
  });
});
