import { BaseDatabase } from './BaseDatabase';

const printError = (error: any) => {console.log(error.sqlMessage || error.message)}

export class CreateTables extends BaseDatabase{
    public createTable = async (): Promise<void> => {
        const result = await this.getConnection().raw(`
            CREATE TABLE IF NOT EXISTS xxx(
               
            );
            
            CREATE TABLE IF NOT EXISTS xxx(
              
                
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