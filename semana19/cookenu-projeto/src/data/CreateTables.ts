import { BaseDataBase } from './BaseDataBase';

const printError = (error: any) => {console.log(error.sqlMessage || error.message)}

class CreateTables extends BaseDataBase{
    public createTable = async () => {
        const result = await BaseDataBase.connection.raw(`
            CREATE TABLE IF NOT EXISTS cookenu_users(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS cookenu_recipes(
                id VARCHAR(255) PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                create_date DATE NOT NULL,
                id_user VARCHAR(255) NOT NULL,
                FOREIGN KEY(id_user) REFERENCES cookenu_users(id)
            );
        `)
        .then(() => { console.log("Tabelas criadas")})
        .catch(printError)
    }
}

const createDB = new CreateTables();

const tables = createDB.createTable()
