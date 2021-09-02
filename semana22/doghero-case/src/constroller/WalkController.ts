import { Request, Response } from "express";
import { WalkBusiness } from "../business/WalkBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { WalkInputDTO } from "../model/Walk";

export class WalkController {
    async signup(req: Request, res: Response) {
        try {

            const input: WalkInputDTO = {
                dateWalk: req.body.dateWalk,
                startWalk: req.body.startWalk,
                finishWalk: req.body.finishWalk,
                price: req.body.price,
                status: req.body.status,
                idTutor: req.body.idTutor,
                idDog: req.body.idDog,
                idWalker: req.body.idWalker
            }

            const walkBusiness = new WalkBusiness();
           await walkBusiness.createWalk(input);

            res.status(200).send("Walk criado com sucesso.");

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }


}