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

    //   public introduceYourself(): string{
    //       return "Olá, bom dia!";
    //   }

      public introduceYourself(): string{
        return `Olá, sou ${this.name}. Bom dia!`;
    }
  }

  const dadosUser = new User("01", "mms@gmail.com", "Aline Barros", "1234")

  console.log({
    Id:dadosUser.getId(),
    Email: dadosUser.getEmail(),
    Nome: dadosUser.getName()
    });

  

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

  const cliente1 = new Customer("001", "carla@gmail.com", "Carla Angelice", "4321", "LabeCard")

  

  console.log({
    id: cliente1.getId(), 
    email: cliente1.getEmail(),
    name: cliente1.getName(), 
    cartao: cliente1.getCreditCard(), 
    Compra: cliente1.purchaseTotal
  })

  console.log(cliente1.introduceYourself())


//Polimorfismo
//Exercício 1

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

//Exercício 2
// export abstract class Place {
//     constructor(protected cep: string) {}
  
//       public getCep(): string {
//           return this.cep;
//     }
//   }


//a)

// const place = new Place ()

//b)

export class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }


  const place = new Place ("60510-001")


  //Exercício 3


export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }

  getResidentsQuantity(): number {
    return this.residentsQuantity;
  }
}

const residence = new Residence(3, "60510111")

console.log(residence)

console.log("getResidentsQuantity", residence.getResidentsQuantity())

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

const commerce = new Commerce (10, "60000000")

console.log(commerce)

console.log("getFloorsQuantity", commerce.getFloorsQuantity())


export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    
    cep: string
		) {
	    super(cep);
  }

  getMachinesQuantity(): number{
    return this.machinesQuantity;
  }
}

const industry = new Industry (100, "60500000")

console.log(industry);

console.log("getMachinesQuantity",industry.getMachinesQuantity())

class ResidentialClient extends Residence implements Client{
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string,
  ){
    super(residentsQuantity, cep)
  }

  getcpf(): string{
    return this.cpf
  }

  calculateBill(): number{
    return this.consumedEnergy * 0.75;
  }
}


class CommercialClient extends Commerce implements Client{
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private CNPJ: string,
    floorsQuantity: number,
    cep: string
  ){
    super(floorsQuantity, cep);
  }

  getCNPJ(): string{
    return this.CNPJ;
  }

  calculateBill(): number{
    return this.consumedEnergy * 0.53;
  }
  
}


class IndustrialClient extends Industry implements Client{
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private industrialRegistration: string,
    machinesQuantity: number,
    cep: string
  ){
    super(machinesQuantity, cep);
  }

  getindustrialRegistration(): string{
    return this.industrialRegistration;
  }

  calculateBill(): number{
    return (this.consumedEnergy * 0.45 + this.machinesQuantity*100);
  }
}