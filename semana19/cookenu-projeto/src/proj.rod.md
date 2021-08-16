 52  semana19/cookenu/README.md 
Viewed
@@ -0,0 +1,52 @@
### ex.1

a) Round representa o custo(cost) do processo, quanto mais alto, mais segura a senha, mas mais elevado o uso de processador.

b) 

`
import * as bcrypt from "bcryptjs";

export const generateHash = async (s:string):Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(s, salt)

    return result
}

`

c)

`
import * as bcrypt from "bcryptjs";

export const VerifyHash = async (s:string, hash: string):Promise<boolean> => {
    return bcrypt.compare(s, hash)
}

` 
### ex.2 
a) O cadastro, pois a senha no banco precisar ser um hash
b)
c)
d) Não, pois ele não pede a senha, apenas o token.
### ex.3
a) ok
b)
`
export const getData = (token:string): AuthenticationData =>{
    const payload = jwt.verify(token, process.env.JWT_KEY!) as any
    return {id: payload.id, role: payload.role}
} 

`
 2,345  semana19/cookenu/package-lock.json 
Viewed
Large diffs are not rendered by default.

 34  semana19/cookenu/package.json 
Viewed
@@ -0,0 +1,34 @@
{
  "name": "aula-back-arquitetura",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "ts-node-dev ./src/index.ts",
    "build": "tsc"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/cors": "^2.8.12",
    "@types/express": "4.17.0",
    "@types/jsonwebtoken": "^8.3.9",
    "@types/knex": "^0.16.1",
    "@types/moment": "^2.13.0",
    "@types/node": "^13.7.7",
    "@types/uuid": "^7.0.3",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.0",
    "jsonwebtoken": "^8.5.1",
    "knex": "^0.21.1",
    "moment": "^2.29.1",
    "mysql": "^2.18.1",
    "ts-node": "^8.6.2",
    "ts-node-dev": "^1.0.0-pre.44",
    "typescript": "^3.8.3",
    "uuid": "^8.0.0"
  }
}
 22  semana19/cookenu/queries.sql 
Viewed
@@ -0,0 +1,22 @@
CREATE TABLE cookenu_users (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255)
);
DROP TABLE cookenu_users;
INSERT INTO
  cookenu_users
VALUES("12345678", "Carlos", "carlos@teste.com", "123456", "NORMAL");

CREATE TABLE cookenu_recipes (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) UNIQUE NOT NULL,
  description VARCHAR(255) NOT NULL,
  date VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES cookenu_users(id) 
);

DROP TABLE cookenu_recipes; 
 34  semana19/cookenu/request.rest 
Viewed
@@ -0,0 +1,34 @@
###

POST http://localhost:3003/user/signup
Content-Type: application/json

{
   "name": "Maria",
   "email": "maria@teste.com" ,
   "password": "123456",
   "role": "ADMIN"
}


### 
POST http://localhost:3003/user/login
Content-Type: application/json

{
   "email": "janana@teste.com" ,
   "password": "123456"
}


###
GET http://localhost:3003/user/profile

###
POST http://localhost:3003/recipe
Content-Type: application/json

{
   "name": "pastel de ar" ,
   "description": "muita massa"
}
 17  semana19/cookenu/src/app.ts 
Viewed
@@ -0,0 +1,17 @@
import express from "express"
import cors from "cors"
import { AddressInfo } from "net"

export const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
}) 
 18  semana19/cookenu/src/data/BaseDatabase.ts 
Viewed
@@ -0,0 +1,18 @@
import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export class BaseDatabase {
 protected static connection = knex({
    client: "mysql",
    connection: {
       host: process.env.DB_HOST,
       port: 3306,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_SCHEMA,
       multipleStatements: true
    }
 })
}
 30  semana19/cookenu/src/data/RecipeDatabase.ts 
Viewed
@@ -0,0 +1,30 @@


import { Recipe } from "../entities/Recipes";
import { BaseDatabase } from "./BaseDatabase";


export class RecipeDataBase extends BaseDatabase {

  async postRecipe(recipe:Recipe): Promise<any> {
    const result =  await BaseDatabase.connection("cookenu_recipes")
      .insert({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        date: recipe.date,
        user_id: recipe.userId
      })

      return result[0] 
  }

  async getRecipeByID(id: string): Promise<Recipe> {

    const result = await BaseDatabase.connection("cookenu_recipes")
      .select("*")
      .where({id})

    return result[0] as Recipe
  }
} 
 31  semana19/cookenu/src/data/UserDataBase.ts 
Viewed
@@ -0,0 +1,31 @@

import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDataBase extends BaseDatabase {


  async postUser(user:User): Promise<void> {
    await BaseDatabase.connection("cookenu_users")
      .insert(user)
  }

  async getUserByEmail(email: string): Promise<any> {
    const result = await BaseDatabase.connection("cookenu_users")
      .select("*")
      .where("email", "=", `${email}`)

    return result[0] && User.toUserModel(result[0])

  }

  async getUserByID(id: string): Promise<User> {

    const result = await BaseDatabase.connection("cookenu_users")
      .select("*")
      .where("id", "=", `${id}`)

    return result[0] as User
  }
} 
 54  semana19/cookenu/src/endpoints/createRecipe.ts 
Viewed
@@ -0,0 +1,54 @@
import { Request, Response } from "express";
import moment from "moment";
import { RecipeDataBase } from "../data/RecipeDatabase";
import { UserDataBase } from "../data/UserDataBase";
import { Recipe } from "../entities/Recipes";
import { User } from "../entities/User";
import { CustomError, InvalidRequest, Unauthorized } from "../error/customError";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManeger";
import { IdGenerator } from "../services/IdGenerator";

export default async function createRecipe(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const token = req.headers.authorization!
        const { title, description } = req.body

        if (!token) {
            throw new Unauthorized
        }

        if (!title || !description) {
            res.statusCode = 422
            throw new InvalidRequest
        }

        const authenticator = new Authenticator()
        const { role, id } = authenticator.getData(token)
        const userId = id

        if (role !== "NORMAL" && role !== "ADMIN") {
            throw new InvalidRequest
        }

        const idGen = new IdGenerator()
        const recipeId = idGen.generateId()

        const creationDate = moment().format('L')

        const recipe = new Recipe(recipeId, title, description, creationDate, userId)

        const rd = new RecipeDataBase()
        await rd.postRecipe(recipe)

        res.status(201).send({ message: "receita criada com sucesso" })

    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)

    }
} 
 59  semana19/cookenu/src/endpoints/createUser.ts 
Viewed
@@ -0,0 +1,59 @@
import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { CustomError } from "../error/customError";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManeger";
import { IdGenerator } from "../services/IdGenerator";

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {


        const { name, email, password } = req.body
        let { role } = req.body

        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'password' e 'email'")
        }

        if (role !== "NORMAL" && role !== "ADMIN") {
            role = "NORMAL"
        }

        if (email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("email inválido")
        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error(" senha muito curta")
        }

        const auth = new Authenticator()
        const hash = new HashManager()
        const genId = new IdGenerator()

        const id = genId.generateId()
        const hashPassword: string = await hash.generateHash(password)
        const user = new User(id, name, email, hashPassword, role)

        const ud = new UserDataBase()
        const newUser = await ud.postUser(user)


        const authData: AuthenticationData = { id, role }
        const token = auth.generateToken(authData)

        res.status(201).send({ token })

    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)

    }
} 
 42  semana19/cookenu/src/endpoints/getRecipe.ts 
Viewed
@@ -0,0 +1,42 @@
import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDatabase";
import { UserDataBase } from "../data/UserDataBase";
import { Recipe } from "../entities/Recipes";
import { User } from "../entities/User";
import { CustomError, Unauthorized } from "../error/customError";
import { Authenticator } from "../services/Authenticator";

export default async function getRecipe(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const authorization = req.headers.authorization!
        const id = req.params.id

        if(!authorization){
            throw new Unauthorized
        }

        const auth = new Authenticator()
        const verifyUser = auth.getData(authorization)

        if(verifyUser.role !== "NORMAL" && verifyUser.role !== "ADMIN"  ){
            throw new CustomError("Usuário não autorizado", 401)
        }

        const rd = new RecipeDataBase()
        const result: Recipe = await rd.getRecipeByID(id)

        if(!result){
            throw new CustomError("Receita não encontrada", 404)
        }

        const recipe = new Recipe(result.id, result.title, result.description, result.date)

        res.status(201).send({ recipe })
    } catch (error) {  
        res.status(404).send(error.message || error.sqlMessage)
    }

}  
 33  semana19/cookenu/src/endpoints/getUser.ts 
Viewed
@@ -0,0 +1,33 @@
import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { CustomError, Unauthorized } from "../error/customError";
import { Authenticator } from "../services/Authenticator";

export default async function getUser(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const authorization = req.headers.authorization!

        if(!authorization){
            throw new Unauthorized
        }

        const ud = new UserDataBase()
        const auth = new Authenticator().getData(authorization)

        if(auth.role !== "NORMAL"){
            throw new CustomError("Usuário não autorizado", 401)
        }

        const user: User = await ud.getUserByID(auth.id)

        res.status(201).send({ user })

    } catch (error) {  
        res.status(404).send(error.message || error.sqlMessage)
    }

}  
 45  semana19/cookenu/src/endpoints/getUserById.ts 
Viewed
@@ -0,0 +1,45 @@
import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { CustomError, InvalidRequest, Unauthorized } from "../error/customError";
import { Authenticator } from "../services/Authenticator";

export default async function getUserByID(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const authorization = req.headers.authorization!
        const id = req.params.id

        if(!authorization){
            throw new CustomError("esse endpoint precisa de autorização", 401)
        }

        if(!id){
            throw new InvalidRequest
        }

        const ud = new UserDataBase()
        const auth = new Authenticator().getData(authorization)

        if(auth.role !== "ADMIN"){
            throw new Unauthorized
        }

        const user: User = await ud.getUserByID(id)

        const result = {
            id: user.id,
            name: user.name,
            email: user.email
        }


        res.status(201).send({response: result})

    } catch (error) {  
        res.status(404).send(error.message || error.sqlMessage)
    }

}  
 52  semana19/cookenu/src/endpoints/login.ts 
Viewed
@@ -0,0 +1,52 @@
import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { CustomError } from "../error/customError";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManeger";

export default async function createUser(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'password' e 'email'")
        }

        if (email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("email inválido")
        }

        if (password.length < 6) {
            res.statusCode = 422
            throw new Error(" senha muito curta")
        }
        const ud = new UserDataBase()
        const user = await ud.getUserByEmail(email)

        if (!user) {
            throw new Error("usuário não encontrado");
        }

        const hash = new HashManager()
        const comparePassword = await hash.verifyHash(password, user.password)

        if (!comparePassword) {
            throw new CustomError("senha inválida", 401);
        }

        const auth = new Authenticator()
        const payload: AuthenticationData = {id: user.id, role: user.role}
        const token = auth.generateToken(payload)

        res.status(201).send({ token })

    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}  
 11  semana19/cookenu/src/entities/Recipes.ts 
Viewed
@@ -0,0 +1,11 @@
export class Recipe {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public date: string,
        public userId?: string,

    ) { }

    } 
 16  semana19/cookenu/src/entities/User.ts 
Viewed
@@ -0,0 +1,16 @@
export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public role?: string,

    ) { }


    static toUserModel(data: any): User {
        return new User(data.id, data.name, data.email, data.password, data.role);
      }
}

 38  semana19/cookenu/src/error/customError.ts 
Viewed
@@ -0,0 +1,38 @@
export class CustomError extends Error {
    constructor(
        message: any,
        protected statusCode: number = 400
    ) {
        super(message)
    }
}

export class NotFoundError extends CustomError {
    constructor() {
        super("Não encontrado", 404);
    }
}

export class InvalidRequest extends CustomError{
    constructor() {
        super("Preencha corretamente os campos ", 400);
    }
}

export class Unauthorized extends CustomError{
    constructor() {
        super("Usuário não autorizado", 401);
    }
}

export class InvalidEmail extends CustomError{
    constructor() {
        super("Email inválido", 406);
    }
}

export class InvalidDate extends CustomError{
    constructor() {
        super("Data inválida, uso o formatao dd/mm/aaa", 406);
    }
} 
 17  semana19/cookenu/src/index.ts 
Viewed
@@ -0,0 +1,17 @@
import { app } from "./app";
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getUser from "./endpoints/getUser"
import getUserByID from "./endpoints/getUserById";
import createRecipe from "./endpoints/createRecipe";
import { getRounds } from "bcryptjs";
import getRecipe from "./endpoints/getRecipe";


app.get('/user/profile', getUser )
app.get('/user/:id', getUserByID )
app.get('/recipe/:id', getRecipe) 

app.post('/user/signup', createUser)
app.post('/user/login', login) 
app.post('/recipe', createRecipe)  
 27  semana19/cookenu/src/services/Authenticator.ts 
Viewed
@@ -0,0 +1,27 @@

import * as jwt from "jsonwebtoken";


export interface AuthenticationData {
    id: string;
    role: string;
  } 

export class Authenticator {

    generateToken(input:AuthenticationData  ): string {

        const token = jwt.sign(
           input,
            process.env.JWT_KEY!,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
        )
        return token
    }

    getData(token: string): AuthenticationData {
        const payload = jwt.verify(token, process.env.JWT_KEY!) as any
        const result: AuthenticationData = { id: payload.id, role: payload.role }
        return result
    }
} 
 14  semana19/cookenu/src/services/HashManeger.ts 
Viewed
@@ -0,0 +1,14 @@
import * as bcrypt from "bcryptjs";

export class HashManager {
    async generateHash(s:string):Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(s, salt)
        return result
    }

    async verifyHash(s:string, hash: string):Promise<boolean>  {
        return bcrypt.compare(s, hash)
    }
} 
 9  semana19/cookenu/src/services/IdGenerator.ts 
Viewed
@@ -0,0 +1,9 @@
import { v4 } from "uuid";

export class IdGenerator {

    generateId(): string {
        return v4();
    }

} 
 11  semana19/cookenu/tsconfig.json 
Viewed
@@ -0,0 +1,11 @@
{
  "compilerOptions": {
    "target": "es6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "outDir": "./build" /* Redirect output structure to the directory. */,
    "rootDir": "./" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
    "strict": true /* Enable all strict type-checking options. */,
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  }
}