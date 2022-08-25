const express=require('express')
const { addProduct, productlist, productDetails, updateProduct, deleteProduct, filterProduct, findRelated } = require('../controller/productController')
const { productCheck, validation } = require('../validation')
const router=express.Router()
const upload =require('../middleware/upload')

router.post('/addproduct',upload.single('product_image'),productCheck,validation,addProduct)
router.get('/productlist',productlist)
router.get('/product/details/:product_id',productDetails)
router.put('/product/update/:product_id',updateProduct)
router.delete('/product/delete/:product_id',deleteProduct)
router.post('/filterproduct',filterProduct)
router.get('/getrelatedproducts/:id',findRelated)

module.exports=router