import { generateToken } from './../services/authenticator';
import { generateId } from '../services/idGenerator';
import { hash } from '../services/hashManager';
import { createUsers } from '../data/users/createUsers';


export const signupBusiness = async({name, email, password, role}: any) => {
    if(!name || !email || !password){
        throw new Error("Preencha todos os campos: name, email, password")
    }
    
    const id: string = generateId()
    
    const hashPass = await hash(password);
    console.log('hashPass',hashPass)

    await createUsers({
        id, 
        name, 
        email, 
        password: hashPass, 
        role
    })
    console.log(createUsers)
    const token: string = generateToken({
        id,
        role: role
    })
    console.log(token)
    return token

}