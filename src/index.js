const app = require("./app");

const port = 3000;

// Run server
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
