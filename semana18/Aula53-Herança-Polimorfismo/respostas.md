### Exercício 1
```
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }

  const dadosUser = new User("01", "mms@gmail.com", "Aline Barros", "1234")

  console.log({
      Id:dadosUser.getId(),
      Email: dadosUser.getEmail(),
      Nome: dadosUser.getName()
      });

```
a)Rresposta: Atributos marcados como private só podem ser acessados dentro da classe ou usando funções getter. No código não há nenhuma função que imprima o password, portanto, nesse caso, não é possível;

b) Resposta: A mensagem é impressa 1 vez.

### Exercício 2

```
 class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }
```

a) Resposta: o texto "Chamando o construtor da classe Customer" foi impresso uma vez;
b) Resposta: o texto "Chamando o construtor da classe User" foi impresso uma vez. Como a classe Custumer é filha da classe User, essa é executada na criação de uma instância da classe filha.(a Custumer é uma abstração da User);


### Exercício 3
```
 const cliente1 = new Customer("001", "carla@gmail.com", "Carla Angelice", "4321", "LabeCard")

  console.log({
    id: cliente1.getId(), 
    email: cliente1.getEmail(),
    name: cliente1.getName(), 
    cartao: cliente1.getCreditCard(), 
    Compra: cliente1.purchaseTotal
  })
```

a) Resposta: Não, pois a propriedade 'password' é particular, private, e só é acessível dentro da class User e não possue um método getter para acessar seu valor fora.


### Exercício 4
Resposta:
```
public introduceYourself(): string{
          return "Olá, bom dia!";
      }
```

```
console.log(cliente1.introduceYourself())

```

### Exercício 5

```
  public introduceYourself(): string{
        return `Olá, sou ${this.name}. Bom dia!`;
    }
```

```
console.log(cliente1.introduceYourself())
```

## Polimorfismo

### Exercício 1

```
export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

const client:  Client = {
    name: 'Rochelle Rock',
    registrationNumber: 9999,
    consumedEnergy: 180,

    calculateBill : () =>{
        return 2
    }
}
   
console.log("client:",{
    name:client.name, 
    registrationNumber:client.registrationNumber,
    consumedEnergy: client.consumedEnergy,
    calculateBill: client.calculateBill()
})

```

a) Resposta: Consegui imprimir todas. Toda informação que vem de uma interface é public.

### Exercício 2

```
const place = new Place ()
```

a) Resposta: Não é possível criar uma instância de uma classe abstrata.ts(2511)

b) Resposta: A solução que eu pensei é não declarar como abstract.

```
export class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }
```
```
const place = new Place ("60510-001")
```
### Exercício 3
```
export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }
}

const residence = new Residence(3, "60510111")

console.log(residence)
```

```
export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }
}

const commerce = new Commerce (10, "60000000")

console.log(commerce)
```

```
export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    
    cep: string
		) {
	    super(cep);
  }
}

const industry = new Industry (100, "60500000")

console.log(industry)
```

*Getter*
```
getResidentsQuantity(): number {
    return this.residentsQuantity;
  }
```

```
getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
  ```

  ```
  getMachinesQuantity(): number{
    return this.machinesQuantity;
  }
  ```

  

