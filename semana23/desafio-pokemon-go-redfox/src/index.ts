import dotenv from 'dotenv';
import express from 'express';
import { AddressInfo } from 'net';
import { pokemonRouter } from './routes/pokemonRouter';


dotenv.config();

const app = express();

app.use(express.json());

app.use("/pokemon", pokemonRouter);


const { PORT = 3003} = process.env

const server = app.listen(PORT, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });


  //exportando arquivo xlsx para json
  // const xlsxj = require("xlsx-to-json");
  // xlsxj({
  //   input: "pokemonGo.xlsx", 
  //   output: "pokemonGo.json"
  // }, function(err, result) {
  //   if(err) {
  //     console.error(err);
  //   }else {
  //     console.log(result);
  //   }
  // });

 