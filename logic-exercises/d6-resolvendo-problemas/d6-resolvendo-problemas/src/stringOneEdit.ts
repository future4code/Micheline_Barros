export function stringOneEdit(texto1: string, texto2: string): any{

    if(Math.abs(texto1.length - texto2.length) > 1) return false;

    if(texto1.length < texto2.length) return texto2.includes(texto1);

    if(texto2.length < texto1.length) return texto1.includes(texto2);

    let count = 0;
    for (let i = 0; i < texto1.length; i++){
        if(texto1[i] !== texto2[i]) count++
    }

    return count === 1;

}





