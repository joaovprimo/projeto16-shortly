import express from "express";
import { tokenMiddleware } from "../middlewares/tokenMiddleware.js";
import {getUsersMe} from "../controllers/usersController.js"


const router = express.Router();

router.get('/users/me', tokenMiddleware ,getUsersMe)

export default router;