exports.calculateProduct = (req, res) => {
  const { number1, number2 } = req.query;

  if (!number1 || !number2) {
    return res
      .status(400)
      .json({
        error: "Please provide both number1 and number2 as query parameters",
      });
  }

  const product = Number(number1) * Number(number2);
  res.json({ product });
};
