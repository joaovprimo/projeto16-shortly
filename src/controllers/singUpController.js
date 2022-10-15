import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import connection from "../database/database.js";

export async function postSingUp(req, res){
    const {name, password, email} = res.locals.singUp;
    
    try{
        const checkEmail =  await connection.query(`
        SELECT * FROM users WHERE email= $1
        `, [email]);
    if(checkEmail.rowCount>0){
        return res.status(409).send("Already exists an user using this email")
    }

    const hashPassword = bcrypt.hashSync(password,11);

    await connection.query(`
    INSERT INTO users (name, email, password) VALUES ($1,$2,$3);
    `,[name, email, hashPassword])

    return res.sendStatus(201);
    }catch(err){
        return res.status(500).send(err.message);
    }
}