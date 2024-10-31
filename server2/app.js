const express = require("express");
const calculationController = require("./controllers/calculationController");

const app = express();
const PORT = 3002;

app.get("/calculate", calculationController.calculateProduct);

app.listen(PORT, () => {
  console.log(`Server2 running on port ${PORT}`);
});
