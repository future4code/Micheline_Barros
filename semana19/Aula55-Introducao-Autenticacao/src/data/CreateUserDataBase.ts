import { BaseDataBase } from './BaseDataBase';





export class CreateUserDataBase extends BaseDataBase{
    public createUser = async (
        id: string,
        email: string,
        password: string
    ) => {
        await BaseDataBase.connection("aula55_user")
        .insert({
            id: id,
            email: email,
            password: password
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


