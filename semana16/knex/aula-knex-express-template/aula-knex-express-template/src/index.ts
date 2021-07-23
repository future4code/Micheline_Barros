import { request } from 'express';
import app from './app';
import connection from './connection';

app.get("/", async (req, res) => {
    try{

        const result = await connection.raw(
            `select * from Actor;`
        )

        res.status(200).send(result[0])
        
    } catch(error){

        res.status(400).send(error.sqlMessage || error.message)

    };
})

const getActorName = async (name: string): Promise<any> => {
    const result = await connection.raw(
        `select * from Actor where name = "${name}"`
    )
    return result[0][0]
}


app.get("/name/:name", async (req, res) => {
    try{
        const name = req.params.name
       res.send(await getActorName(name));
        

       res.status(200).end()
        
    } catch(error){
        res.status(400).send(error.sqlMessage || error.message)


    };
})

const getActorGender = async (gender: string): Promise <any> => {
    const result = await connection.raw(`
    select count(*) from Actor where gender = "${gender}";
    `)
    return result[0][0]
}


app.get("/gender/:gender", async (req, res) => {
    try{
        const gender = req.params.gender
        // const result = await getActorGender(gender)
       
        res.status(200).send(await getActorGender(gender))
        
    } catch(error){

        res.status(400).send(error.sqlMessage || error.message)

    };
})


const updateActor = async (
    salary: number,
    id: string
): Promise<void> => {
    await connection("Actor").update({
       salary: salary 
    })
    .where({id: id})
}


app.put("/actor/:id", async (req, res) =>{
    try{
        const salary= req.body.salary 
       const id= req.params.id
       await updateActor(salary, id)
        res.status(200).send("Atualizado com sucesso")
    }catch(error) {
        res.status(400).send(error.sqlMessage || error.message);
    }
})