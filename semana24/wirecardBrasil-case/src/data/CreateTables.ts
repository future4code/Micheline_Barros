import { BaseDatabase } from './BaseDatabase';

const printError = (error: any) => {console.log(error.sqlMessage || error.message)}

export class CreateTables extends BaseDatabase{
    public createTable = async (): Promise<void> => {
        const result = await this.getConnection().raw(`
            CREATE TABLE IF NOT EXISTS client_table(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                cpf VARCHAR(255) NOT NULL
            );
            
            CREATE TABLE IF NOT EXISTS purchase_table(
                id VARCHAR(255) PRIMARY KEY,
                amount FLOAT NOT NULL,
                type VARCHAR(255) NOT NULL,
                billet_code VARCHAR(255),
                card_holder_name VARCHAR(65),
                card_number VARCHAR(65),
                card_expiration_date DATE,
                card_CVV INT,
                id_client VARCHAR(255),
                FOREIGN KEY(id_client) REFERENCES client_table(id)
            );
        `)
        .then(() => { console.log("Tabelas criadas")})
        .catch(printError)
        .finally(() => {
            this.getConnection().destroy()
        })
    }
   
}

const createDB = new CreateTables();

createDB.createTable()