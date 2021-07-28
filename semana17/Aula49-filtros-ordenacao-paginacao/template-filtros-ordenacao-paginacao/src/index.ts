import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getRecipesNome } from "./endpoints/getRecipesNome";


app.get("/recipes", getRecipesNome)
