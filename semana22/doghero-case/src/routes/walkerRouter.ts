import express from "express";
import { WalkerController } from "../constroller/WalkerController";


export const walkerRouter = express.Router();

const walkerController = new WalkerController();

walkerRouter.post("/signup", walkerController.signup);
