import express from "express";
import cors from "cors";
import {AddressInfo} from "net";


export const app = express();

app.use(express.json());

app.use(cors());


//string de criação do servidor. Como ele usa o AddressInfo será necessário instalar o types do node

const server = app.listen( process.env .PORT  || 3003,  () => { 
  if (server) { 
    const address = server.address() as AddressInfo; 
    console. log(`Server is running in http://localhost:${address . port }` ) ; 

  } else { 
    console. error(`Failure upon starting server.`); 
  }

});
