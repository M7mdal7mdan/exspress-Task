const express = require("express");
const router = express.Router();
const {
    fetchShops,postShops,deleteShops,updateShops, fetchShop, postProducts
} = require("./controllers")

//param meddileware
router.param("shopId", async(req,res,next,shopId)=>{
    const shop =  await fetchShop(shopId,next)
    if(shop){
        req.shop = shop
    }else{
        next({status:404,messege:"shop not found"})
    }
    req.shop =shop
    next()
})

// Shops Create
router.get("/",fetchShops);

// Shops List
router.post("/", postShops);


// Products List
router.post("/:shopId/products", postProducts);

// Shops Delete
router.delete("/:shopId",deleteShops);

//Product Update
router.put("/:shopId", updateShops);
// ("/api/Shops/productID")



module.exports = router