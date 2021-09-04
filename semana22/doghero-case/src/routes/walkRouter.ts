import express from "express";
import { WalkController } from "../controller/WalkController";


export const walkRouter = express.Router();

const walkController = new WalkController();

walkRouter.post("/signup", walkController.signup);


