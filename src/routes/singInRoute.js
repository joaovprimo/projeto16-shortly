import express from "express";
import {singInMiddleware} from "../middlewares/singInMiddleware.js";
import {postSingIn} from "../controllers/singInController.js";

const router = express.Router();

router.post('/singin', singInMiddleware, postSingIn);

export default router;