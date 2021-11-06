const express = require('express')
const { getAllProducts, addProduct } = require('./proController.js')
const router = express.Router()

router.get('/allproducts', getAllProducts)
router.post('/addproduct', addProduct)

module.exports = router
