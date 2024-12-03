import express from "express"  
import userRouter from "./routes/userRoute.js";
import connectDB from "./database/db.js";

import cors from "cors"
import trainerRouter from "./routes/trainerRoute.js";
import 'dotenv/config'

const app=express();
connectDB()


const PORT=8000;
app.use(express.json())
app.use(express.urlencoded({ extended: true} ))
app.get('/',(req,res)=>{
   res.json("hello")
})
const corsOption={
   origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOption));
app.use('/user',userRouter)
app.use('/trainer',trainerRouter)


 
 app.listen(PORT,()=>{
    console.log(`Server started at port:${PORT}`)
 })

 