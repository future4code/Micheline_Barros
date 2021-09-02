import express from "express";
import { DogController } from "../constroller/DogController";


export const dogRouter = express.Router();

const dogController = new DogController();

dogRouter.post("/signup", dogController.signup);
