import app from './app';
import createCountry from './endpoints/createCountry ';
import deleteCountry from './endpoints/deleteCountry';
import editCountry from './endpoints/editCountry';
import getAllCountries from './endpoints/getAllCountries';
import getAllCountryById from './endpoints/getAllCountryById';
import getSearch from './endpoints/getSearch';

app.get("/countries", getAllCountries) 

//app.method(path, handler). A função getAllCountries será acionada quando chegar uma requisição para o caminho /countries

app.get("/countries/search", getSearch)

app.get("/countries/:id", getAllCountryById)

app.post("/countries/:id", editCountry)

app.delete("/countries/:id", deleteCountry)

app.post("/countries", createCountry)