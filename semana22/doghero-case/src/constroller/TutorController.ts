import { Request, Response } from "express";
import { TutorBusiness } from "../business/TutorBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { TutorInputDTO } from "../model/Tutor";

export class TutorController {
    async signup(req: Request, res: Response) {
        try {

            const input: TutorInputDTO = {
                email: req.body.email,
                phone: req.body.phone,
                name: req.body.name,
                password: req.body.password
            }

            const tutorBusiness = new TutorBusiness();
           await tutorBusiness.createTutor(input);

            res.status(200).send("Tutor criado com sucesso.");

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }


}