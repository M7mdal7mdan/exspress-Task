const express = require("express");
const productsRoutes = require("./apis/products/routes");;
const app = express();
const connectDb = require("./db/database");
const logger = require("./db/middleware/logger");
const errorHandling = require("./db/middleware/errorHandling");
const notFoundhandler = require("./db/middleware/notFoundhandler");



//middleware
app.use(express.json()); 
app.use(logger);



//Router
app.use("/api/products",productsRoutes);


//middleware
app.use (notFoundhandler);

app.use (errorHandling);




connectDb();
  app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
