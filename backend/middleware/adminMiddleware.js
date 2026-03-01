const jwt= require('jsonwebtoken');


exports.adminMiddleware = async (req,res,next) =>{

    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({msg:"Token not found"})
    }
    try {
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        req.adminId = decoded.adminId;
        next();

    }
    catch(err){
        return res.status(403).json({msg:"Invalid token"})
    }
       

}