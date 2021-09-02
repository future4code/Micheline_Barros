import dotenv from 'dotenv';
import express from 'express';
import { AddressInfo } from 'net';
import { dogRouter } from './routes/dogRouter';
import { tutorRouter } from './routes/tutorRouter';
import { walkerRouter } from './routes/walkerRouter';
import { walkRouter } from './routes/walkRouter';

dotenv.config();

const app = express();

app.use(express.json());

app.use("/tutor", tutorRouter);

app.use("/walker", walkerRouter);

app.use("/dog", dogRouter);

app.use("/walk", walkRouter);


const server = app.listen(3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
        console.error('Falha ao rodar o servidor.')
    }
});
