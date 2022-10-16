import connection from "../database/database.js";

export async function getUsersMe (req,res){

    const user = res.locals.user.rows[0];
    const id = user.id;

    try{
        const checkUrlsUser = await connection.query(`
        SELECT id, "shortUrl", url, "visitCount" FROM urls WHERE urls."userId"=$1;
        `,[id]);
       const totalvisits = await connection.query(`
       SELECT SUM("visitCount") AS "visitCount" FROM urls WHERE urls."userId"=$1;
       `,[id]);

       return res.status(200).send({id, 
        name: user.name,
        visitCount:totalvisits.rows[0].visitCount,
        shortenedUrls:checkUrlsUser.rows
        });

    }catch(err){
        return res.status(500).send(err.message);
    }

}