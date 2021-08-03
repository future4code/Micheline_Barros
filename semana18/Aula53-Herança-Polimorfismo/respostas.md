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