import { PurchaseInputDTO } from '../model/Purchase';
import { Request, Response } from "express";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export class PurchaseController {
    async purchaseCreate(req: Request, res: Response) {
        try {

            const input: PurchaseInputDTO = {
                amount: req.body.amount,
                type: req.body.type,
                card_holder_name: req.body.card_holder_name,
                card_number: req.body.card_number,
                card_expiration_date: req.body.card_expiration_date,
                card_CVV: req.body.card_CVV,
                id_client: req.body.id_client
            }

            const purchaseBusiness = new PurchaseBusiness();
            const result = await purchaseBusiness.createPurchase(input);

            res.status(200).send(result || "Purchase created successfully.");

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getPurchaseById(req: Request, res: Response) {
        try {

            const id = req.params.id as string;
           
            const purchaseBusiness = new PurchaseBusiness();
            const result = await purchaseBusiness.getPurchaseById(id);
               
            res.status(200).send(result)  


        } catch (error) { 
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getPurchaseType(req: Request, res: Response) {
        try {

            const page = Number(req.query.page) || 1;

            const offset: number = 5 * (page -1);

            const type = req.query.type === "boleto" ? "boleto" : "card"
           
            const purchaseBusiness = new PurchaseBusiness();
            const result = await purchaseBusiness.getPurchaseType(offset, type);
               
            res.status(200).send(result)  


        } catch (error) { 
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    
}