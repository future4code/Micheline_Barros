//Exercício 1
//a) Resposta: O constructor serve para executar ações específicas ao criar uma instância. Ele recebe os atributos do objeto que queremos criar. Ele pode ser chamado passando o keyword new + class + os parâmetros obrigatórios: new UserAccount ('valor_cpf', 'valor_name', valor_idade);

//b)

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  // private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

}

const conta = new UserAccount ('021.555.333-60', 'Micheline', 35)

//Resposta: o texto foi impresso apenas uma vez.

//c)