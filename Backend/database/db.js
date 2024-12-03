import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.DB)
        console.log("Db connected")
    } catch (error) {
       console.log(error)  
       
    }
}

export default connectDB;