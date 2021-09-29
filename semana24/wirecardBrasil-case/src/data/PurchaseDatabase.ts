import { NotFoundError } from "../error/NotFoundError";
import { PurchaseInputDTO } from "../model/Purchase";
import { BaseDatabase } from "./BaseDatabase";


export class PurchaseDatabase extends BaseDatabase{
   
    async createPurchase(
        purchase: any
    ): Promise<PurchaseInputDTO>{
        
       try {
    
            const result = await this.getConnection().insert({
                id: purchase.id,
                amount: purchase.amount,
                type: purchase.type,
                billet_code: purchase.billet_code,
                card_holder_name: purchase.card_holder_name,
                card_number: purchase.card_number,
                card_expiration_date: purchase.card_expiration_date,
                card_CVV: purchase.card_CVV,
                id_client: purchase.id_client
                
            }).into(this.TABLE_NAME.Purchase)

            return purchase.billet_code

           
       } catch (error) {
            throw new Error(error.sqlMessage || error.message);
       } 
    }
   
    async getPurchaseByIdClient(idClient: string): Promise<PurchaseInputDTO[]>{
        
        try {
            const result = await this.getConnection().raw(`
            SELECT p.id as id,
            c.id as idPurchase,
            p.amount as amount,
            p.type as type,
            p.billet_code as billetCode,
            p.card_holder_name as cardHolderName,
            p.card_number as cardNumber,
            p.card_expiration_date as cardExpirationDate,
            p.card_CVV as cardCVV,
            c.name as name,
            c.cpf as cpf
            FROM ${this.TABLE_NAME.Purchase} p
            LEFT JOIN ${this.TABLE_NAME.Client} c ON c.id = p.id_client
            WHERE p.id_client = "${idClient}"
            ORDER BY name ASC
            `)
            
            if(!result.length){
                throw new NotFoundError("There are no payments")
            }

                      
            return result[0].map((data: any) => ({
                            idClient: data.id,
                            name: data.name,
                            idPurchase: data.id,
                            type: data.type,
                            billetCode: data.billetCode,
                            amount: data.amount,
                            cardHolderName: data.cardHolderName,
                            cardNumber: data.cardNumber,
                            cardExpirationDate: data.cardExpirationDate,
                            cardCVV: data.cardCVV
                        }))
         

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

    async getPurchaseType(offset: number, type: string): Promise<PurchaseInputDTO[]>{
        
        try {
            const result = await this.getConnection()
           .select("*")
           .where('type', type)
           .into(this.TABLE_NAME.Purchase)
           .limit(10)
           .offset(offset);

        //    return result
      
            if(type === "boleto"){
                return result.map((data: any) => ({
                    type: data.type,
                    idClient: data.id,
                    name: data.name,
                    idPurchase: data.id,
                    billetCode: data.billet_code,
                    amount: data.amount
                }))
            } else{
                return result.map((data: any) => ({
                    type: data.type,
                    idClient: data.id,
                    name: data.name,
                    idPurchase: data.id,
                    amount: data.amount,
                    cardHolderName: data.card_holder_name,
                    cardNumber: data.card_number,
                    cardExpirationDate: data.card_expiration_date,
                    cardCVV: data.card_CVV
                }))
            }        
            
         

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }

    }


}