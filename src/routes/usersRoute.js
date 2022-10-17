import express from "express";
import { tokenMiddleware } from "../middlewares/tokenMiddleware.js";
import {getUsersMe, getRanking} from "../controllers/usersController.js"


const router = express.Router();

router.get('/users/me', tokenMiddleware ,getUsersMe)
router.get('/ranking', getRanking)

export default router;