import Product from "../models/productModel.js"
import asyncHandler from 'express-async-handler'


// mô tả: lấy dữ liệu của tất cả các sản phẩm
// @route: Get/api/products
// @access: Public
const getProducts = asyncHandler(async(req, res) => {
    const product= await Product.find({})
    res.json(product)
})

// mô tả: lấy dữ liệu của 1 sản phẩm theo id
// @route: Get/api/products/:id
// @access: Public

const getProoductById = asyncHandler(async(req, res) => {

        const productId = req.params.id
        const product = await Product.findById(productId)
    
        if(product){
            res.json(product) 
        }else{
            res.status(404).json({message: 'Product not found'})
        }
})

export {getProoductById, getProducts}