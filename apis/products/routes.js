const express = require("express");
const router = express.Router();
const {
    fetchProducts,postProducts,deleteProducts,updateProducts
} = require("./controllers")


// Products Create
router.get("/",fetchProducts);

// Products List
router.post("/", postProducts);

// Products Delete
router.delete("/:productId",deleteProducts);

//Product Update
router.put("/:productId", updateProducts);
// ("/api/products/productID")

module.exports = router