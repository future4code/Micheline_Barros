import { GetUserByIdBusiness } from './../business/GetUserByIdBusinness';
import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase";

export class GetUserByIdController{
    getUserId = async(
        req: Request,
        res: Response
    ) => {
        try {
            
            const {id} = req.params;

            const getUserById = new GetUserByIdBusiness()
            const result = await getUserById.getUserId({id})

            res.status(200).send({
                id: result.id,
                name: result.name,
                email: result.email,
                role: result.role
            })

        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

export default new GetUserByIdController()