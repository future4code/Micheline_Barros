### Exercício 1

a) Resposta: esse método devolve um array com outros dois arrays. As informações da tabela estarão dentro do array[0];

b) Resposta:
*Função*
```
const getActorName = async (name: string): Promise<any> => {
    const result = await connection.raw(
        `select * from Actor where name = "${name}"`
    )
    return result[0][0]
}
```
*Requisição*
```
app.get("/:name", async (req, res) => {
    try{
        const name = req.params.name
        console.log('req.params.name',req.params.name);
       res.send(await getActorName(name));
        

       res.status(200).end()
        
    } catch(error){
        console.log('req.params.name',req.params.name)
        res.status(400).send(error.sqlMessage || error.message)


    };
})
```


c) Resposta: 
*Função*
```
const getActorGender = async (gender: string): Promise <any> => {
    const result = await connection.raw(`
    select count(*) from Actor where gender = "${gender}";
    `)
    return result[0][0]
}
```
*Requisição*
```
app.get("/gender/:gender", async (req, res) => {
    try{
        const gender = req.params.gender
        console.log('req.params.name',req.params.gender);
        // const result = await getActorGender(gender)
       
        res.status(200).send(await getActorGender(gender))
        
    } catch(error){

        res.status(400).send(error.sqlMessage || error.message)

    };
})
```


### Exercício 2

a) Resposta: 
*Função:*
```
const updateActor = async (
    salary: number,
    id: string
): Promise<void> => {
    await connection("Actor").update({
       salary: salary 
    })
    .where({id: id})
}

```
*Requisição:*
```
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
```

b) Resposta:
*Função:*
```
const deleteActor = async(id: string): Promise<void> => {
    await connection("Actor").delete().where({id: id});
}
```
*Requisição:*
```
app.delete("/actor/:id", async (req, res) => {
    try{
        const id = req.params.id;
        await deleteActor(id);
        res.status(200).send("Deletado com sucesso");
    }catch(error){
        res.status(400).send(error.sqlMessage || error.message);
    }
})
```

c) Resposta:
*Função:*
```
const mediaToGender = async (gender: string): Promise<void> => {
    const mediaSalary = await connection("Actor").avg({gender:"salary"}).where({gender})

    console.log('mediaSalary',mediaSalary)
    // Tem que dar um console.log pra ver como a resposta chega para que possa ser acessada no return da forma correta
    return mediaSalary[0].gender;
};
```
*Requisição:*
```
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
```


### Exercício 3

a) Resposta: 
```

```

b) Resposta:
```

```

### Exercício 4

a) Resposta: 
```

```

b) Resposta:
```

```

c) Resposta:
```

```

d) Resposta: 
```

```

### Exercício 5

a) Resposta: 


b) Resposta:
```

```

c) Resposta:
```

```

d) Resposta: 
```

```

e) Resposta: 
```

```

### Exercício 6

a) Resposta:
```

```

b) Resposta:
```

```

c) Resposta:
```

```

```

```

d) Resposta: 
```

```

```

```
**


### Exercício 7

a) Resposta:
```

```

b) Resposta:
```

```

c) Resposta:
```

```

d) Resposta: 
```

```

e) Resposta:
```

```

f) Resposta:
```

```


### Exercício 8

a) Resposta:
```

```

b) Resposta:
```

```

c) Resposta:
```

```

d) Resposta: 
```

```
