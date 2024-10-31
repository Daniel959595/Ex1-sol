const axios = require("axios");

exports.getProduct = async (req, res) => {
  const { number1, number2 } = req.query;

  if (!number1 || !number2) {
    return res.render("index", { result: "Please provide both numbers." });
  }

  try {
    // Send request to server2 using Dapr’s service invocation API
    const response = await axios.get(
      `http://localhost:3501/v1.0/invoke/server2/method/calculate?number1=${number1}&number2=${number2}`
    );

    const product = response.data.product;
    res.render("index", { result: `The product is ${product}` });
  } catch (error) {
    console.error("Error calling server2:", error);
    res.render("index", { result: "Error calculating product." });
  }
};
