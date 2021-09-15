export function countCharRepeated(texto: string): any{

    // if(Math.abs(texto1.length - texto2.length) > 1) return false;

    // if(texto1.length < texto2.length) return texto2.includes(texto1);

    // if(texto2.length < texto1.length) return texto1.includes(texto2);

    const textoSort = texto.split('').sort();

    const string: any = [];
    let charComp = texto[0];
    let count = 0;

  for (const char of texto) {
        if (char !== charComp){
            string.push(charComp + count);
            charComp = char;
            count = 0;
        } else{
            count++;
        }
  }

  string.push(charComp + count);
  let result = '';
  for (const key of string){
      result+= key;
  }

  return result.length > texto.length? texto : result
}





