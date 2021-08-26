import { GetUserIdData } from "../data/GetUserIdData"
import { CustomError } from "../errors/CustomError"

export class GetUserByIdBusiness{
    constructor(
        private getUserIdData: GetUserIdData
    ){}
   public getUserId = async(id: string) => {
            
        //    const getData = new GetUserIdData();
           const resultUser = await this.getUserIdData.getUserIdData(id)

           console.log("resultbusiness", resultUser)

           if(!resultUser){
            throw new CustomError (404, "Not Found")
           }

           return resultUser

    }
}

export default new GetUserByIdBusiness(new GetUserIdData())