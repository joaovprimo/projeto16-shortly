import express from "express";
import { tokenMiddleware } from "../middlewares/tokenMiddleware";
import { urlMiddleware } from "../middlewares/urlMiddleware.js";
import { postUrl } from "../controllers/urlController.js";

const router = express.Router();

router.post('/singup', tokenMiddleware, urlMiddleware, postUrl );

export default router;