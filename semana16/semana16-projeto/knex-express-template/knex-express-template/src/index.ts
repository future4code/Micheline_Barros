import { Request, Response } from 'express';
import { connect } from 'http2';
import { send } from 'process';
import app from './app';
import connection from './connection';

app.get("/alluser", async (req, res) => {
    try{

        const result = await connection.raw(
            `select * from ToDoListUser;`
        )

        res.status(200).send(result[0])
        
    } catch(error){

        res.status(400).send(error.sqlMessage || error.message)

    };
})

app.post("/user", async(req: Request, res: Response): Promise<void> => {
    try{
        if(req.body.name ===undefined || req.body.nickname ===undefined || req.body.email ===undefined) {
            throw new Error("Verifique se foi passado o nome, o nickname ou email corretamente!")
        }
        await connection.raw(`
        insert into ToDoListUser(id, name, nickname, email)
        value(
            ${Date.now().toString()},
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}"
        )
        `);
       
       
        res.status(200).send("sucesso")
    } catch(error){
        res.status(400).send(error.sqlMessage || error.message)
    }
})


app.get("/user/:id", async(req: Request, res: Response): Promise<void> => {
    try{
        const id = req.params.id;
        const result = await connection.raw(`
            select id, nickname from ToDoListUser where id = "${id}";
        `)
        if(!result[0][0]){
            throw new Error("Usuário não encontrado!")
        }
        res.status(200).send(result[0][0])

    } catch(error){
        res.status(400).send(error.sqlMessage || error.message)
    }
})

const updateUser = async (id: string, name?: string, nickname?: string, email?: string):Promise<void> => {
    if(name){
        await connection("ToDoListUser").update({
            name
         }).where({id: id})
    }
    if(nickname){
        await connection("ToDoListUser").update({
            nickname
         }).where({id: id})
    }
    if(email){
        await connection("ToDoListUser").update({
            email
         }).where({id: id})
    }
}
app.put("/user/edit/:id", async(req: Request, res: Response): Promise<void> => {
    try{
        const id = req.params.id;
        if(req.body.name === '' || req.body.nickname === '' || req.body.email === ''){
            res.status(400).send("Não é possível passar um dado em branco!")
        }

        if(!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send("Atualize pelo menos um valor")
        }

        await updateUser(id, req.body.name, req.body.nickname, req.body.email  )
        
            res.status(200).send("Atualizado co sucesso!")
       
      
    }
    catch(error){
        res.status(400).send(error.sqlMessage || error.message)
    }
})
