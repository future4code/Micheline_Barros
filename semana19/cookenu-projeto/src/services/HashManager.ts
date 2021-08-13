import * as bcrypt from "bcryptjs";


export class HashManager{
    async hash(password: string){
        //para esconder o texto precisamos:
        //do plaintext (que é o parâmetro testToHide);
        //do nosso cost (que é o quanto vamos demorar pra esconder. Quanto maior mais escondido)
        //do salt (que vai ser gerado aqui na função, a partir do cost ou rouds)
        const cost = 12; //esse valor pode vir do .env
        const salt = await bcrypt.genSalt(cost);
        const result = await bcrypt.hash(password, salt);
        
        return result;
    }
}
