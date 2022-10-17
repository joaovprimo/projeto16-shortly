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

export async function getRanking (req,res){

    try{
        const checkRanking = await connection.query(`
        SELECT users.id AS id, users.name AS name, COUNT(urls.id) AS "linksCount", SUM(urls."visitCount") AS "visitCount" FROM users JOIN urls ON users.id = urls."userId" GROUP BY users.id ORDER BY "visitCount" DESC LIMIT 10;
        `)
    
        return res.status(200).send(checkRanking.rows)
    }catch(err){
        return res.status(500).send(err.message);
    }

}