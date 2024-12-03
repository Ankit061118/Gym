import express from 'express'
import { addTrainer, getUser, getUserById, login, payment, register, verify } from '../controllers/userController.js';
import { auth } from '../middleware/auth.js';

const router =express.Router();

router.post("/register",register)
router.post("/login",login)
router.post('/trainer',auth,addTrainer)
router.post('/fee',auth,payment)
router.post('/verify',auth,verify)
router.get('/get',auth,getUserById)
router.get('/list',getUser)

export default router;