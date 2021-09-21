import { GetUserIdData } from '../src/data/GetUserIdData';
import { GetUserByIdBusiness } from './../src/business/GetUserByIdBusinness';
import { GetUserIdMock } from './mocks/GetUserIdMock';


const getUserIdBusinessMock = new GetUserByIdBusiness(
    new GetUserIdMock() as GetUserIdData
)

describe("Testando o GetById", () => {

    test("Deve retornar erro quando o usuário não existir", async () => {
        expect.assertions(2);
        try {
        
            await getUserIdBusinessMock.getUserId("1234lr5l")

        } catch (error) {

        expect(error.message).toEqual("Not Found");
        expect(error.statusCode).toBe(404);
        console.log(error.message)
    }
})

})