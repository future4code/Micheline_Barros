import { GetUserByIdBusiness } from './../business/GetUserByIdBusinness';
import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase";
import { GetUserIdData } from '../data/GetUserIdData';

export class GetUserByIdController{
    getUserId = async(
        req: Request,
        res: Response
    ) => {
        try {
            
            const {id} = req.params;

            const getUserById = new GetUserByIdBusiness(new GetUserIdData())
            const result = await getUserById.getUserId(id)

            res.status(200).send({
                id: result.id,
                name: result.name,
                email: result.email,
                role: result.role
            })

        } catch (error) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message });
        }
    }
}

export default new GetUserByIdController()