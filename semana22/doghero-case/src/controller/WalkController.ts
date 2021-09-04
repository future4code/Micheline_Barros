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
                time: req.body.time,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                quantityDogs: req.body.quantityDogs,
                idTutor: req.body.idTutor,
            }

            const walkBusiness = new WalkBusiness();
           await walkBusiness.createWalk(input);

            res.status(200).send("Walk criado com sucesso.");

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getWalk(req: Request, res: Response) {
        try {

            const dataAtual = req.query.liga

            console.log("controllerd",dataAtual)

            const walkBusiness = new WalkBusiness();
            const result = await walkBusiness.getWalkScheduled(dataAtual);

            res.status(200).send(result)

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}