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

interface LinkedListNode{
  [x: number]: number;
}

export class LinkedList {
  constructor(public start?: LinkedListNode) {}

  public appendToTail(value: number) {
    if (!this.start) {
      this.start = new LinkedListNode(value);
    } else {
      let node: LinkedListNode = this.start;
      while (node && node.getNext() !== undefined) {
        node = node.getNext()!;
      }
      node.setNext(new LinkedListNode(value));
    }
  }

  public print(): void {
    let node: LinkedListNode | undefined = this.start;
    let i = 1;
    while (node !== undefined) {
      console.log(`Elemento ${i}: `, node!.getData());
      node = node!.getNext();
      i++;
    }
  }
}