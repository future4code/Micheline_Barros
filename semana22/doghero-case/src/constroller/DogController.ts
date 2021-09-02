import { Request, Response } from "express";
import { DogBusiness } from "../business/DogBusiness";
import { TutorBusiness } from "../business/TutorBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { DogInputDTO } from "../model/Dog";
import { TutorInputDTO } from "../model/Tutor";

export class DogController {
    async signup(req: Request, res: Response) {
        try {

            const input: DogInputDTO = {
                name: req.body.name,
                dogBreed: req.body.dogBreed,
                genderDog: req.body.genderDog,
                sizeDog: req.body.sizeDog,
                idTutor: req.body.idTutor
            }

            const dogBusiness = new DogBusiness();
           await dogBusiness.createDog(input);

            res.status(200).send("Dog criado com sucesso.");

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }


}