import express from "express";
import { WalkController } from "../controller/WalkController";


export const walkRouter = express.Router();

const walkController = new WalkController();

walkRouter.post("/signup", walkController.signup);

walkRouter.get("/wallking", walkController.getWalk);

walkRouter.get("/showWalk", walkController.getShowWalk);

walkRouter.get("/walkTutor", walkController.getWalkTutor);



