import express from "express";
import {singUpMiddleware} from "../middlewares/singupMiddleware.js";
import {postSingUp} from "../controllers/singUpController.js";

const router = express.Router();

router.post('/singup', singUpMiddleware, postSingUp);

export default router;