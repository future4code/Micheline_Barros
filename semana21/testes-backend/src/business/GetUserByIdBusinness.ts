import { GetUserIdData } from "../data/GetUserIdData"

export class GetUserByIdBusiness{
    getUserId = async({id}: any) => {
            
           if(!id){
               throw new Error ("Informe o id.")
           }



           const getData = new GetUserIdData();
           const resultUser = await getData.getUserIdData({id})

           if(!resultUser){
            throw new Error ("Não existe usuário associado a este id.")
           }

           return resultUser

    }
}