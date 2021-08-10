import * as bcrypt from "bcryptjs";


export const generetorHash = async (s: string): Promise<string> => {
    const cost = 12;
    const salt = await bcrypt.genSalt(cost);
    const result = await bcrypt.hash(s, salt);
        
    return result;
}


// export class HashManager{
//     async hash(textToHide: string){
//         //para esconder o texto precisamos:
//         //do plaintext (que é o parâmetro testToHide);
//         //do nosso cost (que é)

//         const cost = 12; //esse valor pode vir do .env
//         const salt = await bcrypt.genSalt(cost);
//         const cypherText = await bcrypt.hash(textToHide, salt);
        
//         return cypherText;
//     }
// }