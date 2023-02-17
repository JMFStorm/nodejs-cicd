const express = require("express");
const { GetDailyPokemonV1, GetDailyPokemonV2 } = require("./pokemon");

const app = express();

app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.send("Hello world");
  return;
});

// Get pokemon of the day, API versioning in header
app.get("/pokemon-of-the-day", async function (req, res, next) {
  const version = req.get("Version");
  if (version === "1") {
    const result = await GetDailyPokemonV1();
    res.status(200).send(result);
    return;
  }
  if (version === "2") {
    const result = await GetDailyPokemonV2();
    res.status(200).send(result);
    return;
  }
  res.status(500);
  res.send("Invalid version header.");
  return;
});

module.exports = app;
