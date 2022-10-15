import { singUpSchema } from "../schemas/singupSchema.js";

export async function singUpMiddleware(req, res, next){
    const {name, email, password, confirmPassword} = req.body;

    const validation = singUpSchema.validate({
        name,
        email,
        password,
        confirmPassword
    }, {abortEarly: false});

    if(validation.error){
        const errors = validation.error.details.map(det=>det.message);
        return res.status(422).send(errors);
    }

    if(password !== confirmPassword){
        return res.status(422).send("Password and Confirmation must be equals");
    }
    res.locals.singUp = {name, email, password}
    next();

}