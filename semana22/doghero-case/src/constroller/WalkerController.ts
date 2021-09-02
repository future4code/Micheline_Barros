import { Request, Response } from "express";
import { WalkerBusiness } from "../business/WalkerBusiness - ";
import { BaseDatabase } from "../data/BaseDatabase";
import { WalkerInputDTO } from "../model/Walker";

export class WalkerController {
    async signup(req: Request, res: Response) {
        try {

            const input: WalkerInputDTO = {
                email: req.body.email,
                phone: req.body.phone,
                name: req.body.name,
                password: req.body.password
            }

            const walkerBusiness = new WalkerBusiness();
           await walkerBusiness.createWalker(input);

            res.status(200).send("Walker criado com sucesso.");

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }


}