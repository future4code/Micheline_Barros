import { BaseDatabase } from './BaseDatabase';

const printError = (error: any) => {console.log(error.sqlMessage || error.message)}

export class CreateTables extends BaseDatabase{
    public createTable = async (): Promise<void> => {
        const result = await this.getConnection().raw(`
            CREATE TABLE IF NOT EXISTS doghero_tutor(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                phone VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );
            
            CREATE TABLE IF NOT EXISTS doghero_dog(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                dog_breed VARCHAR(255) NOT NULL,
                gender_dog VARCHAR(255) NOT NULL,
                size_dog VARCHAR(255) NOT NULL,
                id_tutor VARCHAR(255) NOT NULL,
                FOREIGN KEY(id_tutor) REFERENCES doghero_tutor(id)
            );

            CREATE TABLE IF NOT EXISTS doghero_walker(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                phone VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS doghero_wallking(
                id VARCHAR(255) PRIMARY KEY,
                date_walk DATE NOT NULL,
                start_walk TIME NOT NULL,
                finish_walk TIME NOT NULL,
                price FLOAT,
                status VARCHAR(255) NOT NULL DEFAULT "pendente",
                id_tutor VARCHAR(255) NOT NULL,
                id_dog VARCHAR(255) NOT NULL,
                id_walker VARCHAR(255) NOT NULL,
                FOREIGN KEY(id_tutor) REFERENCES doghero_tutor(id),
                FOREIGN KEY(id_dog) REFERENCES doghero_dog(id),
                FOREIGN KEY(id_walker) REFERENCES doghero_walker(id)
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