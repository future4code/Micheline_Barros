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

