import connection from "../database/database.js";
import { nanoid } from "nanoid";

export async function postUrl(req, res){
    const url = res.locals.url;
    const user = res.locals.user.rows[0];
    const shortUrl = nanoid(8);
console.log(url)
console.log(user)
console.log(shortUrl)
    try{
        const postUrl = await connection.query(`
        INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1,$2,$3);
        `, [url, shortUrl, user.id]);

        return res.status(201).send(shortUrl);

    }catch(err){
        return res.status(500).send(err.message)
    }

}

export async function getUrlById(req,res){
    const idParams = req.params.id;
    let checkUrl;
    try{
          checkUrl = await connection.query(`
            SELECT * FROM urls WHERE id = $1;
            `, [idParams]);

    if(checkUrl.rowCount === 0 ){
        return res.status(404).send("Url does not exists");
    }
    const id = checkUrl.rows[0].id;
    const url = checkUrl.rows[0].url;
    const shortUrl = checkUrl.rows[0].shortUrl;
        return res.status(200).send({id, shortUrl, url})

    }catch(err){
        return res.status(500).send(err.message)
    }
}

export async function getUrlOpen(req, res){
    const {shortUrl} = req.params;

    try{
        const checkShortUrl = await connection.query(`
        SELECT * FROM urls WHERE "shortUrl" = $1;
        `,[shortUrl]);

        if(checkShortUrl.rowCount === 0){
            return res.status(404).send("Url does not exists");
        }

       const id = checkShortUrl.rows[0].id;
       const url = checkShortUrl.rows[0].url; 
       let visitCount = checkShortUrl.rows[0].visitCount;
       visitCount++;

        await connection.query(`
        UPDATE urls SET "visitCount"= ${visitCount} WHERE id = $1;
        `, [id]);

        //return res.send({id, shortUrl, url, visitCount});
        return res.redirect(url);
    }catch(err){
        return res.status(500).send(err.message);
    }

}