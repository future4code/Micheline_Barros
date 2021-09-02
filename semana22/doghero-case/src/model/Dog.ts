import { InputError } from "../error/InputError";

export class Dog{
    constructor(
        private id: string,
        private name: string,
        private dogBreed: string,
        private genderDog: string,
        private sizeDog: string,
        private idTutor: string
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getPhone(){
        return this.dogBreed;
    }

    getGenderDog(){
        return this.genderDog;
    }

    getSizeDog(){
        return this.sizeDog;
    }

    getIdTutor(){
        return this.idTutor;
    }

    setId(id: string){
        return this.id = id;
    }

    setName(name: string){
        return this.name = name;
    }

    setDogBreed(dogBreed: string){
        return this.dogBreed = dogBreed;
    }

    setGenderDog(genderDog: string){
        return this.genderDog = genderDog;
    }

    setSizeDog(sizeDog: string){
        return this.sizeDog = sizeDog;
    }

    setIdTutor(idTutor: string){
        return this.idTutor = idTutor;
    }

    static toGenderDogEnum(data?: any): GenderDog{
        switch(data){
            case "MALE":
                return GenderDog.MALE
            case "FEMALE":
                return GenderDog.FEMALE
            default:
                throw new InputError("Invalid genderDog")      
            }
    }

    static toTutorModel(data?: any){
        return (data && new Dog(
            data.id,
            data.name,
            data.dogBreed || data.dog_breed,
            Dog.toGenderDogEnum( data.genderDog || data.gender_dog),
            data.sizeDog || data.size_dog,
            data.idTutor || data.id_tutor
        ))
    }
}

export enum GenderDog {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export interface TutorInputDTO{
    name: string,
    dogBreed: string,
    genderDog: string,
    sizeDog: string,
    idTutor: string
}


// export interface ShowOutputDTO{
//     id: string,
//     bandId: string,
//     weekDay: WeekDay,
//     startTime: number,
//     endTime: number,
//     musicGenre?: string,
//     bandName?:string
// }

