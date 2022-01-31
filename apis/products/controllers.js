

const Product = require("../../db/models/Product")




exports.fetchProducts = async (req, res) => {
    const productArray = await Product.find({}).select("name image description color ");
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
        res.status(500).json({message:error.message})
    }
}

    exports.updateProducts = async(req,res) =>{

        try {
            const {productId} = req.params;
            console.log(productId);
            const product = await Product.findByIdAndUpdate({_id:productId},req.body,{new:true ,runValidators: true}, )
            console.log("🚀 ~ file: controllers.js ~ line 42 ~ exports.updateProducts=async ~ product", product)
            if (product) res.json(product)
            else res.status(404).json({message:"not found"})
            
        } catch (error) {
            res.status(500).json({message:error.message})
        }
    }




  