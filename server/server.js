const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  const randomCO2 = Math.floor(Math.random() * (3500 - 400 + 1)) + 400;
  res.json({ message: randomCO2 });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});