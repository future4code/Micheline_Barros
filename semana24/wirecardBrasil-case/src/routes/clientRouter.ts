import express from "express";
import { ClientController } from "../controller/ClientController";


export const clientRouter = express.Router();

const clientController = new ClientController();

clientRouter.post("/signup", clientController.signup);

clientRouter.get("/all", clientController.getClient);
