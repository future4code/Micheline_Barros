
export class GetUserIdMock{
    
    public getUserIdData = async (id: string) => {
        switch (id) {
            case "123456":
               return "Micheline"
            default:
               return undefined
         }
    }

}