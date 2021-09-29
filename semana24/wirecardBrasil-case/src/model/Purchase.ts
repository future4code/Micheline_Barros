import { InputError } from "../error/InputError";

export class Purchase{
    constructor(
        private id: string,
        private amount: number,
        private type: string,
        private billetCode?: string,
        private cardHolderName?: string,
        private cardNumber?: string,
        private cardExpirationDate?: Date,
        private cardCVV?: number,
        private idClient?: string
      ){}

    getId(){
        return this.id;
    }

    getBilletCode(){
        return this.billetCode;
    }

    getAmount(){
        return this.amount;
    }

    getType(){
        return this.type;
    }

    getIdClient(){
        return this.idClient;
    }

    getCardHolderName(){
        return this.cardHolderName;
    }

    getCardNumber(){
        return this.cardNumber;
    }

    getCardExpirationDate(){
        return this.cardExpirationDate;
    }

    getCardCVV(){
        return this.cardCVV;
    }

    setId(id: string){
        return this.id = id;
    }

    setAmount(amount: number){
        return this.amount = amount;
    }

    setType(type: string){
        return this.type = type;
    }

    setIdClient(idClient: string){
        return this.idClient = idClient;
    }

    setCardHolderName(cardHolderName: string){
        return this.cardHolderName = cardHolderName;
    }

    setCardNumber(cardNumber: string){
        return this.cardNumber = cardNumber;
    }

    setCardExpirationDate(cardExpirationDate: Date){
        return this.cardExpirationDate = cardExpirationDate;
    }

    setCardCVV(cardCVV: number){
        return this.cardCVV= cardCVV;
    }

    static toPaymentEnum(data?: any): Type{
        switch(data){
            case "card":
                return Type.Card
            case "boleto":
                return Type.Boleto
            default:
                throw new InputError("Invalid type payment")      
            }
    }

    // static toStatusEnum(data?: any): Status{
    //     switch(data){
    //         case "PENDENTE":
    //             return Status.PENDENTE
    //         case "CONCLUIDO":
    //             return Status.CONCLUIDO
    //         default:
    //             throw new InputError("Invalid status. Deve ser PENDENTE ou CONCLUIDO")      
    //         }
    //}

    static toPurchaseModel(data?: any){
        return (data && new Purchase(
            data.id,
            data.amount,
            data.idClient || data.id_client,
            data.billetCode || data.billet_code,
            Purchase.toPaymentEnum(data.type),
            data.cardHolderName || data.card_holder_name,
            data.cardNumber || data.card_number,
            data.cardExpirationDate || data.card_expiration_date,
            data.cardCVV || data.card_CVV
        ))
    }
}

export enum Type {
    Card = "card",
    Boleto = "boleto"
}

export enum Status {
    PENDENTE = "PENDENTE",
    CONCLUIDO = "CONCLUIDO"
}

export interface PurchaseInputDTO{
    amount: number,
    type: string,
    card_holder_name?: string,
    card_number?: string,
    card_expiration_date?: Date,
    card_CVV?: number,
    id_client?: string
}


