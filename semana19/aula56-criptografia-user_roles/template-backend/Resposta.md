### Exercício 1
a) Resposta: o round, é um fator, também chamado de cost (custo - numérico) e está ralcionado com a segurança da senha. É recomendado usar o maior valor possível, para que os equipamentos utilizados rodem no tempo desejado. Utilizarei o valor de 12, assim como recomendado no curso, por o valor padrão para a maioria das libs. O salt é uma string, aleatória, que é adicionada a senha na criptografia.
b) Resposta:
```
export const generetorHash = async (s: string): Promise<string> => {
    const cost = 12;
    const salt = await bcrypt.genSalt(cost);
    const result = await bcrypt.hash(s, salt);
        
    return result;
}
```
c) Resposta:
```
export const compare= async (s: string, hash: string): Promise<boolean> => {
    
    const hashCompare: boolean = await  bcrypt.compare(s, hash);

    return hashCompare
}
```

```
async function comparar(){
  const c = await compare("Vamos encriptografar", "$2a$12$XIMVnldegvA00BxJbc9ImOQ15jxijHZgGICtDFVRHiyxoJoLmHcsW");

  console.log(c)
}

comparar();
```
```