import { PurchaseDatabase } from '../data/PurchaseDatabase';
import { IdGenerator } from "../services/IdGenerator";
import { InputError } from "../error/InputError";
import { NotFoundError } from "../error/NotFoundError";
import { PurchaseInputDTO, Type } from '../model/Purchase';
import dayjs from 'dayjs';

export class PurchaseBusiness {

    
    async createPurchase(purchase: PurchaseInputDTO) {


        if(purchase.type === Type.Boleto){
            if(!purchase.amount || !purchase.type){
                throw new InputError("Fill in all fields to register the purchase.")
            }

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const billet_code = idGenerator.generate();

            const input = {
                id: id,
                amount: purchase.amount,
                type: purchase.type,
                billet_code: billet_code,
                id_client: purchase.id_client
            }


            const purchaseDatabase = new PurchaseDatabase();
            const result = await purchaseDatabase.createPurchase(input);
        
            return result
        }

        if(purchase.type === Type.Card){
            if(!purchase.amount || !purchase.type || !purchase.card_holder_name|| !purchase.card_number|| !purchase.card_expiration_date|| !purchase.card_CVV|| !purchase.id_client ){
                throw new InputError("Fill in all fields to register the purchase.")
            }

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const validate: any = dayjs()

            if(purchase.card_expiration_date < validate){
                throw new InputError("Invalid card.")
            }

            const input = {
                id: id,
                amount: purchase.amount,
                type: purchase.type,
                card_holder_name: purchase.card_holder_name,
                card_number: purchase.card_number,
                card_expiration_date: purchase.card_expiration_date,
                card_CVV: purchase.card_CVV,
                id_client: purchase.id_client
            }

            const purchaseDatabase = new PurchaseDatabase();
            const result = await purchaseDatabase.createPurchase(input);
        
            return result

        }

    }

    
    async getPurchaseById(id: string){

        if(!id){
            throw new NotFoundError("Not found")
        }

        const purchaseDatabase = new PurchaseDatabase();
        const result = await purchaseDatabase.getPurchaseByIdClient(id);
       
        return result

    }

    async getPurchaseType(offset: number, type: string){

        if(!type){
            throw new NotFoundError("inform the type of payment")
        }

        const purchaseDatabase = new PurchaseDatabase();
        const result = await purchaseDatabase.getPurchaseType(offset, type);
       
        return result

    } 
}