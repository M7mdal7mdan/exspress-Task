

const Product = require("../../db/models/Product")




exports.fetchProducts = async (req, res,next) => {
    try{
    const productArray = await Product.find();
    res.json(productArray);}
    catch(error){
       next(error)
    }
  };

  exports.postProducts = async (req,res,next) =>{
     try{
        const newProduct = await Product.create(req.body)
        res.status(201);
        res.json(newProduct)
     } catch(error){
        next(error);
     }
  };

  exports.deleteProducts = async (req,res,next) =>{
     try{ 
     const {productId} = req.params;
      const foundProduct = await Product.findByIdAndDelete({_id: productId})
      if(foundProduct){
         
          res.status(204).end();
          res.json(newArray)

      }else{
        next({status:404,messege:"product not found"})
      }
    }catch(error){
        next(error);
    }
}

    exports.updateProducts = async(req,res,next) =>{

        try {
            const {productId} = req.params;
            console.log(productId);
            const product = await Product.findByIdAndUpdate({_id:productId},req.body,{new:true ,runValidators: true}, )
            console.log("🚀 ~ file: controllers.js ~ line 42 ~ exports.updateProducts=async ~ product", product)
            if (product) res.json(product)
            else res.status(404).json({message:"not found"})
            
        } catch (error) {
            next(error);
        }
    }

  

//next({status:404,messege:"product not found"});


  