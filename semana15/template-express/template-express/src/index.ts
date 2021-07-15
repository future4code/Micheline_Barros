import app from './app';
import getAllCountries from './endpoints/getAllCountries';

app.get("/countries", getAllCountries) //app.method(path, handler). A função getAllCountries será acionada quando chegar uma requisição para o caminho /countries