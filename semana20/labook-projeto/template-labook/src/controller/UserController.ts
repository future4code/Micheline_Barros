import { Request, Response } from "express";
import { UserBusiness } from '../business/UserBusiness'



export class UserController {
    signup = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { name, email, password } = req.body;

            const ub = new UserBusiness()
            const token = await ub.signup({ name, email, password });

            res.status(200).send({
                message: "Usuário cadastrado.",
                token
            })


        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    login = async (
        req: Request,
        res: Response
    ) => {
        try {

            const { email, password } = req.body

            const ub = new UserBusiness();
            const token = await ub.login({ email, password });

            res.status(200).send({
                message: "Usuário logado.",
                token
            })
            
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}

