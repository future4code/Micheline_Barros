import { ClientOutputDTO } from '../model/Client';
import { BaseDatabase } from "./BaseDatabase";

export class ClientDatabase extends BaseDatabase {


  public async createClient(
    id: string,
    email: string,
    name: string,
    cpf: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          name,
          cpf
        })
        .into(this.TABLE_NAME.Client);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getClient(offset: number): Promise<ClientOutputDTO[]> {
    try {
      const result = await this.getConnection()
        .select("id", "name", "cpf", "email")
        .into(this.TABLE_NAME.Client)
        .orderBy("name", 'asc')
        .limit(10)
        .offset(offset);

        return result

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }



}
