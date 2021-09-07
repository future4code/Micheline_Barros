import express from "express";
import { WalkController } from "../controller/WalkController";


export const walkRouter = express.Router();

const walkController = new WalkController();

walkRouter.post("/signup", walkController.walkCreate);

walkRouter.get("/WalkDateTodayOrAll", walkController.index);

walkRouter.get("/showWalk/:id", walkController.showWalkId);

walkRouter.get("/walkTutor/:id", walkController.getWalkTutor);



