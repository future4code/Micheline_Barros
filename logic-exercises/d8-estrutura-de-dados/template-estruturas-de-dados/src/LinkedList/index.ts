//Faça a implementação de uma Lista Ligada em Typescript. Implemente o método que adiciona um elemento ao final da lista e um método que imprima todos elementos presentes nela.

import { ListNode, node } from "./ListNode";


export class List{
    constructor(
        public start: ListNode | null = null
    ){}

    public addItem = (value: any): void | undefined => { //quando declaro como void obrigatóriamente quer dizer que minha função não terá um return, mas, caso a execução entre no if, precisamos que a execução se encerre, ou seja, não queremos que o código abaixo seja executado, por isso colocamos um return, pois ele encerra. Como não estmaos passando nenhum valor no return ele retorna undefined, por isso tipamos a função como undefined também, logo ela é void ou undefined.

        if(!this.start){
            this.start = new ListNode(value);
            return //se não encerrar aqui o primeiro elemento será duplicado na execução.
        }

        let currentItem = this.start

        while(currentItem.next){
            currentItem = currentItem.next
        }

        currentItem.next = new ListNode(value)
        
    }
}


const list = new List()

list.addItem("one")
list.addItem("two")
list.addItem("three")
list.addItem("four")

// console.log(list)

console.log(JSON.stringify(list, null, 2))