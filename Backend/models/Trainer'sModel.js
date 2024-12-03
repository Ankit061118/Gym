import mongoose from 'mongoose'
 const trainerSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    client:{type:Object,default:{}},
    

 },{minimize:false})

 const trainerModel=mongoose.models.trainer ||mongoose.model('trainer',trainerSchema);
 export  default trainerModel;