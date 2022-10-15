import { singInSchema } from "../schemas/singinSchema.js";

export async function singInMiddleware(req, res, next){
    const {email, password} = req.body;

    const validation = singInSchema.validate({
        email,
        password,
    }, {abortEarly: false});

    if(validation.error){
        const errors = validation.error.details.map(det=>det.message);
        return res.status(422).send(errors);
    }

    res.locals.singIn = {email,password};
    next();
}
