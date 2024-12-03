import mongoose from 'mongoose'

 const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    Trainer:{type:Object,default:{}},
    fee:{type:Boolean,default:false}
    

 },{minimize:false})

 const userModel=mongoose.models.user ||mongoose.model('user',userSchema);
 export  default userModel;