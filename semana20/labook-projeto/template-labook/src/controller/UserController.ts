import { Request, Response } from "express";
import { UserBusiness } from '../business/UserBusiness'



export class UserController {
    public signup = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { name, email, password } = req.body;

            const sb = new UserBusiness()
            const token = await sb.signup({ name, email, password });

            res.status(200).send({
                message: "Usuário cadastrado.",
                token
            })


        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

