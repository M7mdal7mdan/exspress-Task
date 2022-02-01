const express = require("express");
const productsRoutes = require("./apis/products/routes");;
const app = express();
const connectDb = require("./db/database");



//middleware
app.use(express.json()); 
app.use((req,res,next)=>{
  console.log(`${req.method} ${req.protocol}://${req.get("host")} ${req.originalUrl}`);
  next()
});



//Router
app.use("/api/products",productsRoutes);


//middleware
app.use ((req,res,next)=>{
  res.status(404).json({message: "URL not Found"})
  next()
});
app.use ((error,req,res,next)=>{
  res.status(error.status ||500).json({message:error.message||"Internal Server Error"});
});




connectDb();
  app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
