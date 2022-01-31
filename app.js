const express = require("express");
const productsRoutes = require("./apis/products/routes");;
const app = express();
const connectDb = require("./db/database");



//middleware
app.use(express.json()); 
app.use("/api/products",productsRoutes);



connectDb();
  app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
