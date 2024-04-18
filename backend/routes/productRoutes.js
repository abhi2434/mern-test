import express from 'express'
//import products from './data/products.js'
import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'

const router = express.Router();

router.get('/api/products', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

router.get('/api/product/:id', asyncHandler(async (req, res) =>{
    const product = Product.findById(req.params.id);
    if(product){
        res.json(product);
    }
    else
    {
        res.status(404).json({ message: 'Product not found' });
    }

}));

export default router;