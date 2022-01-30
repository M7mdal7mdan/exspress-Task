const express = require("express");

const app = express();
const products = require("./products");


app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });

  app.get("/products", (req, res) => {
    res.json(products);
  });