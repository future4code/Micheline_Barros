import { BaseDatabase } from "./BaseDatabase";

export class WalkerDatabase extends BaseDatabase {


  public async createWalker(
    id: string,
    phone: string,
    email: string,
    name: string,
    password: string,
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          phone,
          email,
          name,
          password
        })
        .into(this.TABLE_NAME.WALKER);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }


}
