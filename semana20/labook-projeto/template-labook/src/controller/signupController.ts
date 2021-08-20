import { Request, Response } from "express";
import { signupBusiness } from '../business/signupBusiness'



export const signupController = async (
    req: Request,
    res: Response
) => {
    try {
        const {name, email, password} = req.body;

        const token = await signupBusiness({name, email, password});

        res.status(200).send({
            message:"Usuário cadastrado.",
            token
        })


    } catch (error) {
        res.status(500).send(error.message)
    }
}