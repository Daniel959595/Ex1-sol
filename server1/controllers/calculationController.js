const axios = require("axios");

exports.getProduct = async (req, res) => {
  const { number1, number2 } = req.query;

  if (!number1 || !number2) {
    return res
      .status(400)
      .json({
        error: "Please provide both number1 and number2 as query parameters",
      });
  }

  try {
    // Send request to server2 using Dapr's service invocation API
    const response = await axios.get(
      `http://localhost:3501/v1.0/invoke/server2/method/calculate?number1=${number1}&number2=${number2}`
    );

    const product = response.data.product;
    res.json({ product });
  } catch (error) {
    console.error("Error calling server2:", error);
    res.status(500).json({ error: "Error calling server2" });
  }
};
