import { Component, OnInit, Input } from '@angular/core';
import { ListItemDecorator } from '../models/list-item-decorator.model';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonsList: Pokemon[];
  @Input() decoratorType: "Trainer" | "Catalogue";

  //List of all Pokemon combined with decorator type to determine which decorator component to render together with the Pokemon List Items
  pokemons: ListItemDecorator[];

  constructor() { 
    this.pokemonsList = [];
    this.pokemons = [];
    this.decoratorType = "Catalogue"
  }

  //Populates the list of ListItemDecorators with ListItemDecorators with the appropriate type and pokemon
  ngOnInit(): void {
    for(let pokemon of this.pokemonsList){
      this.pokemons.push({"pokemon": pokemon, "decoratorType":this.decoratorType})
    }
  }

}
