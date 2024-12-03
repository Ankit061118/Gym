import express from 'express'
import { getTrainer, getTrainerById, login, register } from '../controllers/trainerController.js';
import { auth } from '../middleware/auth.js';

const trainerRouter =express.Router();

trainerRouter.post("/register",register)
trainerRouter.post("/login",login)
trainerRouter.get('/list',getTrainer)
trainerRouter.get('/trainer',auth,getTrainerById)

export default trainerRouter;