import express from "express";
import { tokenMiddleware } from "../middlewares/tokenMiddleware.js";
import { urlMiddleware } from "../middlewares/urlMiddleware.js";
import { postUrl, getUrlById, getUrlOpen, deleteUrl} from "../controllers/urlController.js";

const router = express.Router();

router.post('/urls/shorten', tokenMiddleware, urlMiddleware, postUrl );
router.get('/urls/:id', getUrlById );
router.get('/urls/open/:shortUrl', getUrlOpen );
router.delete('/urls/:id', tokenMiddleware, deleteUrl );

export default router;