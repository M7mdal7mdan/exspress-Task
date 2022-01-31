let products = require("../../products")

const Product = require("../../db/models/Product")




exports.fetchProducts = async (req, res) => {
    const productArray = await Product.find();
    res.json(productArray);
  };

  exports.postProducts =(req,res) =>{
      const id = products.length +1;
      const newProduct = {id:id, ...req.body};
      products.push(newProduct);
      res.status(201);
      res.json(newProduct)
  };

  exports.deleteProducts =(req,res) =>{
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
  };


  