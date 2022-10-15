import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import singupRout from "./routes/singUpRoute.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use(singupRout);


app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})