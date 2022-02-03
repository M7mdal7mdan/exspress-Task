const express = require("express");
const router = express.Router();
const {
    fetchProducts,deleteProducts,updateProducts, fetchProductt
} = require("./controllers")

//param meddileware
router.param("productId", async(req,res,next,productId)=>{
    const product =  await fetchProductt(productId,next)
    if(product){
        req.product = product
    }else{
        next({status:404,messege:"product not found"})
    }
    req.product =product
    next()
})

// Products Create
router.get("/",fetchProducts);


// Products Delete
router.delete("/:productId",deleteProducts);

//Product Update
router.put("/:productId", updateProducts);
// ("/api/products/productID")



module.exports = router