import jwt from 'jsonwebtoken'
export const auth=async(req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.json({success:false,message:"Not authorized"})
    }
    try {
        const token_decode=await jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId=token_decode.id;
        next()
    } catch (error) {
        console.log(error)
        return res.json({success:false,message:"Error"})
    }
}