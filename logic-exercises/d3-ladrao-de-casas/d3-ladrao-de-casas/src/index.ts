import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {totalValorRoubo } from "./checaParentesesValidos";


dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

totalValorRoubo([1, 5, 9, 7, 6, 10, 54]);

totalValorRoubo([0,12,58,9,6,34,78]);
