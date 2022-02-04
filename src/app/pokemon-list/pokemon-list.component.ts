import { Component, OnInit } from '@angular/core';
import { ListItemDecorator } from '../models/list-item-decorator.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor() { }

  pokemons: ListItemDecorator[] = [{"pokemonName":"Charcoalmon", "decoratorType":"Catalogue"}, {"pokemonName":"Cucumbermon", "decoratorType":"Catalogue"},
  {"pokemonName":"Saltshakermon", "decoratorType":"Trainer"}]
  ngOnInit(): void {
  }

}
