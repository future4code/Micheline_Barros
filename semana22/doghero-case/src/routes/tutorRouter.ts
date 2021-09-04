import express from "express";
import { TutorController } from "../controller/TutorController";


export const tutorRouter = express.Router();

const tutorController = new TutorController();

tutorRouter.post("/signup", tutorController.signup);
