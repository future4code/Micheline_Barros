//Exercício 1
//a) Resposta: O constructor serve para executar ações específicas ao criar uma instância. Ele recebe os atributos do objeto que queremos criar. Ele pode ser chamado passando o keyword new + class + os parâmetros obrigatórios: new UserAccount ('valor_cpf', 'valor_name', valor_idade);

//b)

class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];
 
   constructor(
      cpf: string,
      name: string,
      age: number,
      balance?: number,
      transactions?: Transaction[]
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;

      if(balance){
         this.balance = balance;
      } else{
         this.balance = 0;
      }

      if(transactions){
         this.transactions = transactions;
      } else {
         this.transactions = []
      }
   }

   getTransactionUser(
      description: string,
      value: number,
      date: string
   ){
     const newTransation = new Transaction(description, value, date);
     this.transactions.push(newTransation)
   }

   getUser(){
      return({
         name:this.name,
         cpf: this.cpf,
         age: this.age,
         balance: this.balance,
         transactions: this.transactions
      })
   }

 }
 
 const userAccount1 = new UserAccount ('021.555.333-60', 'Micheline', 3)
 
 //Resposta: o texto foi impresso apenas uma vez.
 
 //c) Resposta: como são privadas só é possível acessá-las diretamente dentro da classe, mas se quisermos as informações privadas fora podemos criar funções para acessá-las, getters.


 //Exercício 2

 //type Transaction = {
  // description: string,
  // value: number,
  // date: string
// }

class Transaction {
   private description: string;
   private value: number;
   private date: string;

   constructor(
      description: string,
      value: number,
      date: string
   ){
      this.description = description;
      this.value = value;
      this.date = date;
   }

   getTransaction(){
      return ({
         description: this.description,
         value: this.value,
         date: this.date
      })
   }
}

const transaction1 = new Transaction("isso é um teste", 200, "02/08/2021")

console.log(transaction1.getTransaction());

console.log(userAccount1.getUser())

const userAccount2 = new UserAccount ('021.555.333-60', 'Micheline', 3, 2000,[new Transaction("isso é um teste", 200, "02/08/2021")])

console.log(userAccount2.getUser())
