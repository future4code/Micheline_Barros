export function checaParenteseValidos(parenteses: string): any{
    let array: any[] = [];

    for(let i = 0; i < parenteses.length; i++){
        let parentese = array[array.length -1];
        if(parenteses[i] == '(' || parenteses[i] == '[' || parenteses[i] == '{'){
            array.push(parenteses[i])
        }else if((parentese =='(' && parenteses[i] == ')') || (parentese =='[' && parenteses[i] == ']') || (parentese =='{' && parenteses[i] == '}')){
             //O método pop() remove o último elemento de um array e retorna aquele elemento.
             array.pop()
        } else{
            return false
        }
    }
    return array.length ? false : true
}


