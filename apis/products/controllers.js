

const Product = require("../../db/models/Product")


exports.fetchProductt = async(productId) =>{
    try {
        const product = await Product.findById(productId)
        return product
    } catch (error) {
        next (error);
    }
}

exports.fetchProducts = async (req, res,next) => {
    try{
     await Product.find(req.product.id);
    res.json(productArray);}
    catch(error){
       next(error)
    }
  };

  exports.postProducts = async (req,res,next) =>{
     try{
       const newProduct = await Product.create(req.product.id)
        res.status(201);
        res.json(newProduct)
     } catch(error){
        next(error);
     }
  };

  exports.deleteProducts = async (req,res,next) =>{
     try{ 
     
          await Product.findByIdAndDelete({_id: req.product.id});

          res.status(204).end();
        

    }catch(error){
        next(error);
    }
}

    exports.updateProducts = async(req,res,next) =>{

        try {
            const product = await Product.findByIdAndUpdate({_id:req.product.id},req.body,{new:true ,runValidators: true}, )
            console.log("🚀 ~ file: controllers.js ~ line 42 ~ exports.updateProducts=async ~ product", product)
            res.json(product)
        } catch (error) {
            next(error);
        }
    }



//next({status:404,messege:"product not found"});


  