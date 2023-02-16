const request = require("supertest");
const app = require("./app");

describe("root", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("/pokemon-of-the-day", () => {
  test("Version 1 returns name status code 200", () => {
    const version = 1;
    return request(app)
      .get("/pokemon-of-the-day")
      .set("Version", version)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(typeof response.text).toBe("string");
      });
  });
});

describe("/pokemon-of-the-day", () => {
  test("Version 2 returns name and type status code 200", () => {
    const version = 2;
    return request(app)
      .get("/pokemon-of-the-day")
      .set("Version", version)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
        expect(typeof response.body).toBe("object");
        expect(response.body.name).toBeDefined();
        expect(response.body.type).toBeDefined();
      });
  });
});

describe("/pokemon-of-the-day", () => {
  test("Version header missing returns status code 500", () => {
    return request(app)
      .get("/pokemon-of-the-day")
      .then((response) => {
        expect(response.statusCode).toBe(500);
      });
  });
});
