import knex from "knex";
import Knex   from "knex";
import dotenv from "dotenv";


dotenv.config();

export abstract class BaseDatabase {

    private static connection: Knex | null = null;

    protected getConnection(): Knex{
        if(!BaseDatabase.connection){
            BaseDatabase.connection = knex({
                client: "mysql",
                connection: {
                  host: process.env.DB_HOST,
                  port: 3306,
                  user: process.env.DB_USER,
                  password: process.env.DB_PASSWORD,
                  database: process.env.DB_DATABASE_NAME,
                  multipleStatements: true
                },
              });        
        }

        return BaseDatabase.connection;
    }

    public static async destroyConnection(): Promise<void>{
        if(BaseDatabase.connection){
            await BaseDatabase.connection.destroy();
            BaseDatabase.connection = null;
        }
    }
}

// import knex from "knex";
// import dotenv from "dotenv";


// dotenv.config();

// export class BaseDatabase{

//     public static connection = knex({
//         client: 'mysql',
//         connection: {
//             host: process.env.DB_HOST,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_DATABASE_NAME,
//             port: 3306,
//             multipleStatements: true //permite criar multiplas tabelas ao mesmo tempo
//         }
//     }) 
// } 