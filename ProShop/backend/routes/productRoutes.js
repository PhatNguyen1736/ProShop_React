import  express  from "express"
import Product from "../models/productModel.js"
import asyncHandler from 'express-async-handler'
const  router = express.Router()


// mô tả: lấy dữ liệu của tất cả các sản phẩm
// @route: Get/api/products
// @access: Public
router.get('/', asyncHandler(async (req, res) => {
    const product= await Product.find({})
    res.json(product)
}))

// mô tả: lấy dữ liệu của 1 sản phẩm theo id
// @route: Get/api/products/:id
// @access: Public
router.get('/:id', asyncHandler(async(req, res) => {

    const productId = req.params.id
    const product = await Product.findById(productId)

    if(product){
        res.json(product) 
    }else{
        res.status(404).json({message: 'Product not found'})
    }
   
}))
export default router