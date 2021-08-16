import { resourceLimits } from "worker_threads";
import { loginTeste } from "../endpoints/login";
import { BaseDataBase } from "./BaseDataBase";
import { AuthenticationData } from '../types'


export class SearchLogin extends BaseDataBase{
    user: any;
    public login = async (email: string) => {
        const result = await BaseDataBase.connection("cookenu_users")
        .where({email})// por padrão essa construção retorna todos os usários, por isso não é necessário colocar o .select, mas como só queremos aquele que corresponda ao email informado colocamos o .where({email})

        console.log("login",{user: result[0]})
       
        return {user: result[0]}
    }
    
   
}

