import connection from "../database/database.js";

export async function tokenMiddleware(req, res, next){

const {authorization} = req.headers;
const token = authorization?.replace("Bearer ", "");
try{
if(!token){
    return res.status(401).send("Invalid Token");
}
const checkSession = await connection.query(`
SELECT * FROM sessions WHERE token = $1`, [token]);

if(checkSession.rowsCount === 0 ){
    return res.status(401).send("Invalid Session");
}

const session = checkSession.rows[0];

const user = await connection.query(`
SELECT * FROM users WHERE id = $1`, [session.userId]);

if(user.rowsCount === 0){
    return res.status(401).send("User not found");
}

res.locals.user = user;
next();
}catch(err){
    return res.status(500).send(err.message);
}
}
