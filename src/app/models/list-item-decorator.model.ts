import { Pokemon } from "./pokemon.model";

export interface ListItemDecorator {
    pokemon: Pokemon;
    decoratorType: "Trainer" | "Catalogue";
}