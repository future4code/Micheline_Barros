import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { ClientInputDTO } from "../model/Client";

export class ClientController {
    async signup(req: Request, res: Response) {
        try {

            const input: ClientInputDTO = {
                name: req.body.name,
                email: req.body.email,
                cpf: req.body.cpf
            }

            const clientBusiness = new ClientBusiness();
            await clientBusiness.createClient(input);

            res.status(200).send("Customer created successfully");

        } catch (error) {
            res.status(400).send({ error: error.message});
        }

        await BaseDatabase.destroyConnection();
    }

    async getClient(req: Request, res: Response) {
        try {

            const page = Number(req.query.page) || 1;

            const offset: number = 5 * (page -1);

            const clientBusiness = new ClientBusiness();
            const result = await clientBusiness.getClient(offset);

            res.status(200).send(result);

        } catch (error) {
            res.status(400).send({ error: error.message});
        }

        await BaseDatabase.destroyConnection();
    }

}