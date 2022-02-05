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

  pokemons: ListItemDecorator[];

  constructor() { 
    this.pokemonsList = [];
    this.pokemons = [];
    this.decoratorType = "Catalogue"
  }

  ngOnInit(): void {
    for(let pokemon of this.pokemonsList){
      this.pokemons.push({"pokemon": pokemon, "decoratorType":this.decoratorType})
    }
  }

}
