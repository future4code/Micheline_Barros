import { Request, Response } from 'express';
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

const deleteActor = async(id: string): Promise<void> => {
    await connection("Actor").delete().where({id: id});
}

app.delete("/actor/:id", async (req, res) => {
    try{
        const id = req.params.id;
        await deleteActor(id);
        res.status(200).send("Deletado com sucesso");
    }catch(error){
        res.status(400).send(error.sqlMessage || error.message);
    }
})



const mediaToGender = async (gender: string): Promise<void> => {
    const mediaSalary = await connection("Actor").avg({gender:"salary"}).where({gender})

    console.log('mediaSalary',mediaSalary)
    // Tem que dar um console.log pra ver como a resposta chega para que possa ser acessada no return da forma correta
    return mediaSalary[0].gender;
};


app.get("/actor/salary/:gender", async (req, res) => {
    try{
        const gender = req.params.gender;
        const result = await mediaToGender(gender)
        res.send({media: result});
        console.log(gender)
    }catch(error){
        res.status(400).send(error.sqlMessage || error.message);
    }
})


const selectActorById = async (id: string): Promise<void> => {
    const result = await connection.raw(`
        select * from Actor where id="${id}"
    `)
    return result[0][0]
}

app.get("/actor/:id", async(req: Request, res: Response) => {
    try{
        const id = req.params.id;
        //const actor = await selectActorById(id);
        res.status(200).send(await selectActorById(id))
        //res.status(200).send(actor)
    }catch(error){
        res.status(400).send(error.sqlMessage || error.message);
    }
})


const getSelectActorGender = async (gender: string): Promise <any> => {
    const result = await connection.raw(`
    select count(*) from Actor where gender = "${gender}";
    `)
    return result[0][0]
}


app.get("/actor", async (req: Request, res: Response) => {
    try{
        const gender = req.query.gender
        const result = await getSelectActorGender(gender as string)
        console.log('gender', gender)
        res.status(200).send({Total:result})
        
    } catch(error){
        res.status(400).send(error.sqlMessage || error.message)

    };
})
