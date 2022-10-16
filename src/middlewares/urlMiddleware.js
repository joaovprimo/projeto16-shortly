import { urlSchema } from "../schemas/urlSchema.js";

export async function urlMiddleware(req, res, next){
const {url} = req.body;
    const validation = urlSchema.validate({
        url
},{abortEarly: false});

if(validation.error){
    const errors = validation.error.details.map(det=>det.message);
    return res.status(422).send(errors);
}

res.locals.url = url;
next();
}