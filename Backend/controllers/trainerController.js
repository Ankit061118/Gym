import validator from "validator";
import userModel from "../models/User'sModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import trainerModel from "../models/Trainer'sModel.js";

export const register=async(req,res)=>{
   try {
    const {username,email,password}=req.body;
    const user= await trainerModel.findOne({email})
    if(user){
        return res.status(400).json({
            message:"User already exists",
            success:false
        })
    }
    if(!username || !email || !password){
        return res.status(400).json({
            message:"Enter all fields",
            success:false
        })
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({
            message:"Enter proper email",
            success:false
        })
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const newUser=trainerModel.create({
       username:username,
       email:email,
       password:hashedPassword
    })
    
    res.status(200).json({
        message:"User created ",
        success:true
    })
   } catch (error) {
    console.log(error)
   }
}
export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        console.log(process.env.JWT_SECRET)
         const user=await trainerModel.findOne({email})
         if(!user){
          return   res.status(400).json({
               message:"User not found",
               success:false
            })
         }
         const isMatch=await bcrypt.compare(password,user.password)
         if(!isMatch){
            res.status(400).json({
                message:"password not matched",
                success:false
            })
         }
         
     const token=createToken(user._id)
     return res.status(200).json({
        success:true,token
     })
    } catch (error) {
        console.log(error)
    }
}
export const getTrainerById=async(req,res)=>{
    try {
      const trainer=await trainerModel.findById(req.body.userId)
      return res.json({
        success:true,
        trainer
      })
    } catch (error) {
      console.log("Error")
      return res.json({
        success:false,
        message:"Error"
      })
    }
    }
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}
export const getTrainer=async(req,res)=>{
    const Trainer=await trainerModel.find({})
    return res.json({
        success:true,
        Trainer
    })
}
