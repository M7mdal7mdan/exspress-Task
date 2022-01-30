const express = require("express");
const res = require("express/lib/response");

const app = express();
app.use(express.json()); //middleware
let products = require("./products");



  app.get("/products", (req, res) => {
    res.json(req.body);
  });

  app.post("/products",(req,res) =>{
      const id = products.length +1;
      const newProduct = {id:id, ...req.body};
      products.push(newProduct);
      res.status(201);
      res.json(newProduct)
  })

  app.delete("/products/:productId",(req,res) =>{
      const {productId} = req.params;
      const foundProduct = products.find(product => product.id ===+productId)
      if(foundProduct){
          const newArray = products.filter((product) => product.id !== +productId);
          products = newArray
          res.status(204).end();
          res.json(newArray)

      }else{
        res.status(404).end();
      }
  })
  app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
