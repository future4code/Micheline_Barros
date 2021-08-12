### Exercício 1
a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
Resposta: Concordo, pois a utilização de strings, uma combinação de números e letras, permite um número de combinações muito maior, o que por sua vez, diminue draticamente a possibilidade de uma repetição de ids.

b. A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 
```
import { v4 } from "uuid";


export class IdGenerator{
    generatorId(): string{
        return v4();
    }
}
```

### Exercício 2
a. Resposta: foi criada uma const que acessa a tabela User do banco de dados. Abaixo temos a configuração da connection que acessa o banco de dados e, por último, a query que cria o usuário inserindo id, email e password na tabela userTableName -> User, no banco de dados. 


b. Resposta:
```
import { BaseDataBase } from "./BaseDataBase";

export class CreateTableDataBase extends BaseDataBase {
    public createTable = async () => {
        const result = await BaseDataBase.connection.raw(`
        CREATE TABLE aula55_user(
            id VARCHAR(255) PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `)
    .then(() => { console.log("Tabela criada.")})
    .catch(
        (error: any) => { console.log(error.sqlMessage || error.message) }
        )
    return result
    } 
}

const rd = new CreateTableDataBase();

const table = rd.createTable()

```

c. Resposta:
```
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
```

### Exercício 3
a. Resposta: É a chamada da key, palavra chave usada na criptografia, que está sendo guardada o arquivo .env. o as string é usado pra informar que esse valor não pode vir undefined e tem que ser uma string;

b. Resposta: 
```
export class Authenticator {

    generateToken(info: AuthenticationData): string{
        const token = jwt.sign(
            {id: info.id},
            process.env.JWT_KEY as string,
            {expiresIn:"3d"}
        )
        return token;
    }
}
```
```
export interface AuthenticationData{
    id: string;
}
```

### Exercício 4
a. Resposta:
```
export async function createUser(
    req: Request, 
    res: Response
): Promise<void>{
    try{
        
        const id: string = new IdGenerator().generatorId();

        const { email, password } = req.body

        const auth = new Authenticator();

        const token = auth.generateToken({id})

        const userDB = new CreateUserDataBase();

        const user = userDB.createUser(id, email, password)

        res.status(200).send(token)
    }catch(error){

        res.status(500).send("Internal server error")
    }
}
```

b. Resposta: 
```
 if(!req.body.email || req.body.email.indexOf("@") === -1){
            throw new Error("email inválido")
}
```

c. Resposta:
```
 if(!req.body.password || req.body.password.lenght < 6){
            throw new Error ("senha inválida")
}
```

