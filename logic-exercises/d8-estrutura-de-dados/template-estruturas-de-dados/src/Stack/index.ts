import { List } from '../LinkedList';
import { ListNode } from './../LinkedList/ListNode';
//Faça a implementação de uma Pilha em Typescript e utilizando uma Lista Ligada como estrutura de base (em aula, usamos um Array). Implemente os métodos:
///`isEmpty`: que indica se ela está vazia

//`push`: que adiciona um elemento à pilha

//`pop`: que retira um elemento da pilha

//`print`: que imprima todos os elementos da pilha


export class Stack{
    constructor(
        public frames: List = new List()
    ) {}

    public isEmpty = () => this.frames.start===null

    public push = (
        value: any
    ): void => {
       this.frames.addItem(value)
    }

    public pop = () => {
        if(!this.isEmpty())return null

        let previousNode: ListNode | null = null
        let currentItem: ListNode | null = this.frames.start

        while(currentItem!.next){
            previousNode = currentItem
            currentItem = currentItem!.next
        }

        previousNode!.next = null
        
        return currentItem
    }

    public print(){
        let node: ListNode | null = this.frames.start;
        let i = 1;
        while (node) {
          console.log(`Elemento ${i}: `, node.value)
          node = node.next;
            i++
        }
        return node
    }
}

const stack = new Stack()
stack.isEmpty()
stack.push("five")
stack.push("six")
console.log(stack);

console.log(stack.isEmpty());

