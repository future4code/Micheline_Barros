import { Request, Response } from 'express';
import { connect } from 'http2';
import { send, title } from 'process';
import app from './app';
import connection from './connection';
import moment from 'moment'

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
        
            res.status(200).send("Atualizado com sucesso!")
       
      
    }
    catch(error){
        res.status(400).send(error.sqlMessage || error.message)
    }
})

 
const createTask = async(
    id: string,
    title: string, 
    description: string, 
    limit_date: string,
    creator_user_id: string
    ): Promise<void> => {
    await connection.raw(`
        insert into ToDoListTask(id, title, description, limit_date,  creator_user_id)
        values(
            ${id},
            "${title}",
            "${description}",
            "${limit_date}",
            "${creator_user_id}"
        )
    `)
    }

app.post("/task", async(req: Request, res: Response): Promise<void> => {
    try{
        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.limit_date ||
            !req.body.creator_user_id
        ){
            throw new Error("Verifique se todos os campos foram preenchidos corretamente!")
        }

        const dateDiff: number = moment(req.body.limit_date, 'DD/MM/YYYY').unix() - moment().unix()

        if(dateDiff <= 0){
            throw new Error("'limit_date' não pode ser ser anterior a data atual!")
        }

        const id: string = Date.now() + Math.random().toString()
        await createTask(
            id,
            req.body.title,
            req.body.description,
            moment(req.body.limit_date, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            req.body.creator_user_id
        )
        res.status(200).send({mensage:"Tarefa criada com sucesso!", id: id})

    } catch(error){
        res.status(400).send(error.sqlMessage || error.message)
    }
})

const getTaskId = async (id: string) => {
    const result = await connection.raw(`
        select tasks.*, users.nickname  from ToDoListTask as tasks
        join ToDoListUser as users
        on creator_user_id = users.id
        where tasks.id = '${id}';
    `)
    return result[0][0]
    }

app.get("/task/:id", async(req: Request, res: Response): Promise<void> =>{
    try{
        const result = await getTaskId(req.params.id);

        if( !result) {
            throw new Error("Tarefa não encontrada!");
        }

        res.status(200).send({
            ...result,
            limit_date:  moment(result.limit_date, 'YYYY-MM-DD').format('DD/MM/YYYY')
        });
    } catch(error){
        res.status(400).send(error.sqlMessage || error.message)
    }
});


