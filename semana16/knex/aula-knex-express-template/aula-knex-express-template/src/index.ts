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


const updateSalaryActor = async (
    salary: number,
    id: string
): Promise<void> => {
    await connection("Actor").update({
       salary: salary,
       id: id
    })
    .where({id: id})
}


app.put("/actor", async (req, res) =>{
    try{
        const salary= req.body.salary 
       const id= req.body.id
       await updateSalaryActor(salary, id)
        res.status(200).send("Atualizado com sucesso")
    }catch(error) {
        res.status(400).send(error.sqlMessage || error.message);
    }
})

const createMovie = async(
    id: string, 
    title: string, 
    synopsis: string,
    release_Date: Date, 
    rating: Number, 
    playing_limit_date: Date
): Promise<void> => {
    await connection.insert({
    id: id, 
    title: title, 
    synopsis: synopsis,
    release_Date: release_Date, 
    rating: rating, 
    playing_limit_date: playing_limit_date
    }).into("Movie");
};

app.post("/movie", async (req, res) =>{
    try{
       await createMovie(
           req.body.id,
           req.body.title ,
           req.body.synopsis ,
           new Date (req.body.release_Date),
           req.body.rating ,
           new Date (req.body.playing_limit_date)
       )
        res.status(200).send("Movie inserido com sucesso")
    }catch(error) {
        res.status(400).send(error.sqlMessage || error.message);
    }
})


const getMovie = async(): Promise<void> => {
    const result = await connection.raw(`
    select * from Movie limit 15;
    `)
    return result[0];
}

app.get("/movie/all", async(req: Request, res: Response) => {
    try {
       res.status(200).send(await getMovie());

    } catch(error){
        res.status(500).send("erro")
    }
})