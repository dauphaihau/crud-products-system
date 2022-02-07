const express = require('express');
const {
    getDetailProduct,
    deleteProduct,
    updateProduct,
    createProduct,
    getProductList
} = require("../controller/product.controller");
const {checkEmpty} = require("../middlewares/validations/product.validation");

const productRouter = express.Router();

productRouter.get('/', getProductList)

// get detail product
productRouter.get('/:id', getDetailProduct)

// create
productRouter.post('/', checkEmpty ,createProduct)

// update
productRouter.put('/:id', updateProduct)

// delete
productRouter.delete('/:id', deleteProduct)

module.exports = productRouter;
