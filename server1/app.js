const express = require("express");
const calculationController = require("./controllers/calculationController");

const app = express();
const PORT = 3001;

app.get("/", calculationController.getProduct);

app.listen(PORT, () => {
  console.log(`Server1 running on port ${PORT}`);
});
