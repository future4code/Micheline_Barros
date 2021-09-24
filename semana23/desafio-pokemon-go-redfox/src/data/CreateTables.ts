import { BaseDatabase } from './BaseDatabase';
import pokemonGo from "./pokemonGo.json"

const printError = (error: any) => {console.log(error.sqlMessage || error.message)}

export class CreateTables extends BaseDatabase{
    public createTable = async (): Promise<void> => {
        const result = await this.getConnection().raw(`
            CREATE TABLE IF NOT EXISTS table_pokemon(
                id INT PRIMARY KEY,
                name VARCHAR(150) NOT NULL UNIQUE,
                generation INT,
                evolution_stage VARCHAR(65),
                family_id VARCHAR(65),
                type_1 VARCHAR(150),
                type_2 VARCHAR(150),
                stat_total INT,
                atk INT ,
                def INT,
                sta INT,
                legendary INT,
                cp_40 INT,
                cp_39 INT
            );
        `)
        .then(() => { console.log("Tabela pokemón criada")})
        .catch(printError)
    }

    insertPokemon = () => this.getConnection()
        .into("table_pokemon")
        .insert(pokemonGo)
        .then(() => { console.log("Dados pokemon criados") })
        .catch(printError)

    closeConnection = () => { this.getConnection().destroy() }
   
}

const createDB = new CreateTables();

createDB.createTable()

createDB.insertPokemon()