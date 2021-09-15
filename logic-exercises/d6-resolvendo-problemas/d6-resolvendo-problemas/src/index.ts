import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {stringOneEdit } from "./stringOneEdit";


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

console.log(stringOneEdit('banana', 'banane'))


