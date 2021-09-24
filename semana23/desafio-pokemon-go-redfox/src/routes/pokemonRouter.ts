import express from "express";
import { PokemonController } from "../controller/PokemonController";


export const pokemonRouter = express.Router();

const pokemonController = new PokemonController();

pokemonRouter.get("/all", pokemonController.getPokemonController);

pokemonRouter.get("/:id", pokemonController.getPokemonByIdController);

pokemonRouter.get("/query/filtros", pokemonController.getPokemonFilterOrderPageController);


