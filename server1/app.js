const express = require("express");
const path = require("path");
const calculationController = require("./controllers/calculationController");

const app = express();
const PORT = 3001;

// Set up Pug as the template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route to render the main page
app.get("/", (req, res) => {
  res.render("index", { result: null });
});

// Route to calculate the product
app.get("/calculate-product", calculationController.getProduct);

app.listen(PORT, () => {
  console.log(`Server1 running on port ${PORT}`);
});
