import express from "express";
import { PurchaseController } from "../controller/PurchaseController";



export const purchaseRouter = express.Router();

const purchaseController = new PurchaseController();

purchaseRouter.post("/create", purchaseController.purchaseCreate);

purchaseRouter.get("/type", purchaseController.getPurchaseType);

purchaseRouter.get("/:id", purchaseController.getPurchaseById);



// walkRouter.get("/walkTutor/:id", walkController.getWalkTutor);

// walkRouter.post("/editStartOrFinish/:id", walkController.editStartWalkOrFinishWalk);

// walkRouter.post("/editStatus/:id", walkController.editStatus);


