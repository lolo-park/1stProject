const productService = require('../services/product.service');

const getProductsByCategoryId  = async(req,res) => {
    try{
        const categoryId = req.params.categoryName;

        if(!categoryId) {
            throw new Error("Key Error")
        }
        const result = await productService.getProductsByCategoryId (categoryId);

        return res.status(200).json({message : result})
    } catch (err) {
        
        res.status(err.statusCode || 400).json({message : err.message});
    }
    
};

const getDetailByProductId = async(req,res) => {
    try{

        const productId = req.params.productId;

        if(!productId) {
            throw new Error("No Product Error")
        }
        const result = await productService.getDetailByProductId(productId)

        return res.status(200).json(result)
    }catch (err){
    
    res.status(err.statusCode ||400).json({message: err.message});
    }
}

const getProductByName = async(req,res)=> {
    try{
        const { productName } = req.query

        

        if(!productName){
            throw new Error("No Name Error")
        }

        const result = await productService.getProductByName(productName);

        return res.status(200).json({message : result})
    }catch (err){
        res.status(err.statusCode || 400).json({message : err.message});
    }
};

module.exports = {getProductsByCategoryId, getProductByName  , getDetailByProductId};
