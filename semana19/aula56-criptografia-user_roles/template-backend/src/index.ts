import { generetorHash, compare } from './services/generetorHash';
import app from "./app";



async function cripto(){
  const hm = await generetorHash("Vamos encriptografar");

  console.log(hm)
}

// cripto();



async function comparar(){
  const c = await compare("Vamos encriptografar", "$2a$12$XIMVnldegvA00BxJbc9ImOQ15jxijHZgGICtDFVRHiyxoJoLmHcsW");

  console.log(c)
}

comparar();
