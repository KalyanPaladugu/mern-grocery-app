const Product=require('../models/Product');

exports.createProduct= async(req,res) =>{
     console.log("Req body", req.body)
    try {
        const {name,desc,price,category,unit} = req.body;
        const image= req.file ? `/uploads/${req.file.filename}`:null
        const products=await  Product.create({name,desc,price,category,unit,image});
        return res.status(200).json({msg:"product is added",products})
    }
    catch(err){
        console.log(err.message)
    }

}

exports.getProduct= async(req,res) =>{
    
    try {
       
        const newProducts= await  Product.find();
        return res.status(200).json({msg:"All Products",newProducts})
    }
    catch(err){
        console.log(err.message)
    }

}