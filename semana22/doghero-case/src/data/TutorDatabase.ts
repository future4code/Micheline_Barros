import { TutorOutputDTO } from './../model/Tutor';
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

  public async getTutorData(offset: number): Promise<TutorOutputDTO[]> {
    try {
      const result = await this.getConnection()
        .select("id", "name", "phone", "email")
        .into(this.TABLE_NAME.TUTOR)
        .orderBy("name", 'asc')
        .limit(5)
        .offset(offset);

        return result

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }



}
