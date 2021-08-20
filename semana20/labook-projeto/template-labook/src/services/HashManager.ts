import * as bcrypt from "bcryptjs";


export class HashManager{
    async hash(s: string): Promise<string>{
        //para esconder o texto precisamos:
        //do plaintext (que é o parâmetro testToHide);
        //do nosso cost (que é o quanto vamos demorar pra esconder. Quanto maior mais escondido)
        //do salt (que vai ser gerado aqui na função, a partir do cost ou rouds)
        const cost = Number(process.env.BCRYPT_COST); //vem do .env
        const salt = await bcrypt.genSalt(cost);
        const result = await bcrypt.hash(s, salt);
        
        return result;
    }

    
    async compare (s: string, hash: string){
        const hashCompare: boolean = await bcrypt.compare(s, hash);
        
        return hashCompare;
    }
}

