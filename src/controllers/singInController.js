import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import connection from "../database/database.js";

export async function postSingIn(req, res){
const {email, password} = res.locals.singIn;

try{
const checkUser = await connection.query(`
SELECT * FROM users WHERE email = $1
`, [email]);

if(checkUser.rowCount === 0 ){
    return res.status(401).send("Wrong email or password1");
}
const user = checkUser.rows[0];

if(!bcrypt.compareSync(password, user.password)){
    return res.status(401).send("Wrong email or password2");
}
    
await connection.query(`
DELETE FROM "sessions" WHERE "userId" = $1`,
 [user.id]);

const token = uuid();

await connection.query(`
INSERT INTO sessions ("userId", token) VALUES ($1,$2)
`, [user.id, token]);

return res.status(200).send({ token });

}catch(err){
    return res.status(500).send(err.message);
}

}