const Product=require('../models/Product');

exports.createProduct= async(req,res) =>{
     console.log("Req body", req.body)
    try {
        const {name,desc,price,category,unit} = req.body;
        const products=await  Product.create({name,desc,price,category,unit});
        return res.status(200).json({msg:"product is added",products})
    }
    catch(err){
        console.log(err.message)
    }

}