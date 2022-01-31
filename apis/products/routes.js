const express = require("express");
const router = express.Router();
const {
    fetchProducts,postProducts,deleteProducts
} = require("./controllers")


// Products Create
router.get("/",fetchProducts);

// Products List
router.post("/", postProducts);

// Products Delete
router.delete("/:productId",deleteProducts);

module.exports = router