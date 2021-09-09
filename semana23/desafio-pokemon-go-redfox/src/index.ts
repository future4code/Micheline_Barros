import dotenv from 'dotenv';
import express from 'express';
import { AddressInfo } from 'net';


dotenv.config();

const app = express();

app.use(express.json());

// app.use("/", Router);


const { PORT = 3003} = process.env

const server = app.listen(PORT, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });


