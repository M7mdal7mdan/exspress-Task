let products = require("../../products")

const Product = require("../../db/models/Product")




exports.fetchProducts = async (req, res) => {
    const productArray = await Product.find();
    res.json(productArray);
  };

  exports.postProducts = async (req,res) =>{
      const newProduct = await Product.create(req.body)
      res.status(201);
      res.json(newProduct)
  };

  exports.deleteProducts = async (req,res) =>{
     try{ 
     const {productId} = req.params;
      const foundProduct = await Product.findByIdAndDelete({_id: productId})
      if(foundProduct){
         
          res.status(204).end();
          res.json(newArray)

      }else{
        res.status(404).end();
      }
    }catch(error){
        
    }

  };


  