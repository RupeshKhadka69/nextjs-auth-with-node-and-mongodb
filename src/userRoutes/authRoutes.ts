import express from 'express'
import { registerUser } from '../userController/userController'
const router = express.Router()
router.post("/",registerUser);

export default router;