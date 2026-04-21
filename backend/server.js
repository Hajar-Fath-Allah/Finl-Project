const express = require("express");
const app = express();

const port = 5000;

app.use(express.json());

app.post("/api/form", (req, res) => {
  console.log("Data received:", req.body);

  res.json({
    message: "Data successfully received",
    data: req.body,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});