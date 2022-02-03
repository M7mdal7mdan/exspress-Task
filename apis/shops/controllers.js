

const Shop = require("../../db/models/Shop")


exports.fetchShop = async(shopId) =>{
    try {
        const shop = await Shop.findById(shopId)
        return shop
    } catch (error) {
        next (error);
    }
}

exports.fetchShops= async (req, res,next) => {
    try{
     await Shop.find(req.shop.id).populate("products");
    res.json(shopArray);}
    catch(error){
       next(error)
    }
  };

  exports.postShop= async (req,res,next) =>{
     try{
       const newshop = await Shop.create(req.shop.id)
        res.status(201);
        res.json(newshop)
     } catch(error){
        next(error);
     }
  };

  exports.deleteShop= async (req,res,next) =>{
     try{ 
     
          await Shop.findByIdAndDelete({_id: req.shop.id});

          res.status(204).end();
        

    }catch(error){
        next(error);
    }
}

    exports.updateShop= async(req,res,next) =>{

        try {
            const shop = await shop.findByIdAndUpdate({_id:req.shop.id},req.body,{new:true ,runValidators: true}, )
            console.log("🚀 ~ file: controllers.js ~ line 42 ~ exports.updateshops=async ~ shop", shop)
            res.json(shop)
        } catch (error) {
            next(error);
        }
    }
    exports.postProducts = async (req,res,next) =>{
        try{
            const {shopId} = req.params;
            req.body.shop = shopId;
          const newProduct = await Product.create(req.product.id);
          await Shop.findByIdAndUpdate({_id:shopId},{$push:{products: newProduct._id}})
           res.status(201);
           res.json(newProduct)
        } catch(error){
           next(error);
        }
     };


//next({status:404,messege:"shop not found"});


  