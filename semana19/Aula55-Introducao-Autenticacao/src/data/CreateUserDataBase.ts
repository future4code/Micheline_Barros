import { User } from './../types';
import { BaseDataBase } from './BaseDataBase';





export class CreateUserDataBase extends BaseDataBase{
    public createUser = async (user: User) => {
        await BaseDataBase.connection("aula55_user")
        .insert({
            id: user.id,
            email: user.email,
            password: user.password
        })
    }
}


//Sugestão de solução:
//const userTableName = "User";

	 //const createUser = async (
		//id: string, 
		//email: string, 
		//password: string) => {
	  //await connection
	   // .insert({
	     // id,
	     // email,
	     // password,
	   // })
	   // .into(userTableName);
	//};