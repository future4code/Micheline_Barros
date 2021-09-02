import { BaseDatabase } from "./BaseDatabase";

export class DogDatabase extends BaseDatabase {


  public async createDog(
    id: string,
    name: string,
    dog_breed: string,
    gender_dog: string,
    size_dog: string,
    id_tutor: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          dog_breed,
          gender_dog,
          size_dog,
          id_tutor
        })
        .into(this.TABLE_NAME.DOG);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }


}
