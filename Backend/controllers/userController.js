import validator from "validator";
import userModel from "../models/User'sModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Stripe from 'stripe';
import trainerModel from "../models/Trainer'sModel.js";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// enter the stripe key here 

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Enter all fields",
        success: false,
      });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Enter proper email",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const token = createToken(user._id);
    res.status(200).json({
      message: "User created",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(process.env.JWT_SECRET);
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Password not matched",
        success: false,
      });
    }

    const token = createToken(user._id);
    return res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export const addTrainer = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const trainer = await trainerModel.findById(req.body.id);
    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "Trainer not found",
      });
    }

    let Trainer = user.Trainer || {};
    let client = trainer.client || {};

    if (!Trainer[req.body.id]) {
      Trainer[req.body.id] = 1;
      client[req.body.userId] = 1;
    } else {
      delete Trainer[req.body.id];
      delete client[req.body.userId];
    }

    await userModel.findByIdAndUpdate(req.body.userId, { Trainer });
    await trainerModel.findByIdAndUpdate(req.body.id, { client });

    return res.json({
      success: true,
      message: Trainer[req.body.id] ? "Trainer added" : "Trainer removed",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userModel.find({});
    return res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const payment = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    const trainerCount = Object.keys(user.Trainer).length;

    const trainer=Object.keys(user.Trainer).length
    const unitAmountInINR = 100000+10000*trainer; // Example amount in paise (10 INR)
    const amountInUSD = unitAmountInINR * 0.012 / 100; // Conversion rate (example)

    if (amountInUSD < 0.50) {
      return res.status(400).json({
        success: false,
        message: "The total amount must convert to at least 50 cents.",
      });
    }

    const line_items = [
      {
        price_data: {
          currency: 'inr',
          product_data: {
            name: 'Trainer Fee',
          },
          unit_amount: unitAmountInINR, // Amount in paise
        },
        quantity: trainerCount,
      },
    ];
    const frontend_url = 'http://localhost:5173'; // Example frontend URL

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true`,
      cancel_url: `${frontend_url}/verify?success=false`,
    });
    
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
export const verify=async(req,res)=>{
  try {
    const {success}=req.body;
  if(success===true){
    await userModel.findByIdAndUpdate(req.body.userId,{fee:true}) 
    return res.json({
      success:true,
      message:"Payment done"
    })
  }
  else{
    return res.json({
      success:false,
      message:"Payment failed"
    })
  }
  
  
  } catch (error) {
    return res.json({
      success:false,
      message:"error"
    })
  }
}
export const getUserById=async(req,res)=>{
try {
  const user=await userModel.findById(req.body.userId)
  return res.json({
    success:true,
    user
  })
} catch (error) {
  console.log("Error")
  return res.json({
    success:false,
    message:"Error"
  })
}
}
