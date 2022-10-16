import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import singupRout from "./routes/singUpRoute.js";
import singInRout from "./routes/singInRoute.js";
import urlRout from "./routes/urlRoute.js";
import usersRout from "./routes/usersRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(singupRout);
app.use(singInRout);
app.use(urlRout);
app.use(usersRout);

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})