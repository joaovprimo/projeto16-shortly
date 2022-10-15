import connection from "../database/database.js";
import { nanoid } from "nanoid";

export async function postUrl(req, res){
    const url = res.locals.url;
    const user = res.locals.user;
    const shortUrl = nanoid(8);

}