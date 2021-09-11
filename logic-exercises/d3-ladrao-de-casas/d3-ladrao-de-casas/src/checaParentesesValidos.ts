// export const array = 

export function totalValorRoubo(valores: number[]): any{

    let soma1 = 0
    let soma2 = 0
    let totalRoubo = 0;

    for(let i = 0; i < valores.length; i = i + 2){
            soma1 = soma1 + valores[i]  
              
        }

    
        for(let i = 1; i < valores.length; i = i + 2){
            soma2 = soma2 + valores[i]
           
        }

        if(soma1>soma2){
            totalRoubo = soma1
            return  console.log('O total do roubo ',totalRoubo)
        } else{
            totalRoubo = soma1
            return  console.log('O total do roubo ', totalRoubo)
        }
}



