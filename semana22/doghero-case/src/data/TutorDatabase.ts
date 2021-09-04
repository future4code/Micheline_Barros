import { BaseDatabase } from "./BaseDatabase";

export class TutorDatabase extends BaseDatabase {


  public async createTutor(
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
        .into(this.TABLE_NAME.TUTOR);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }


}
