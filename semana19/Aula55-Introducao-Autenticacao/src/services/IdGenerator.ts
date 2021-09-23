import { v4 } from "uuid";


export class IdGenerator{
    generatorId(): string{
        return v4();
    }
}