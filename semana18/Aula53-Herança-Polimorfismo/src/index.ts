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