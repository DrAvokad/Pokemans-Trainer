import { Component, OnInit, Input } from '@angular/core';
import { ListItemDecorator } from '../models/list-item-decorator.model';
import { Pokemon } from '../models/pokemon.model';
import { API_KEY } from '../resources';
import { TrainesService, USER_KEY } from '../services/trainers.service';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {
  @Input() listDecorator: ListItemDecorator;
  @Input() index: number;
  catalogue: Boolean = false
  trainer: Boolean = false

  constructor(private trainerService: TrainesService) {
    this.listDecorator = {"pokemon":{"id":0,"name":"Errormon","image":"500","collected":false}, "decoratorType":"Catalogue"}
    this.index = 0;
  }

  ngOnInit(): void {
    if (this.listDecorator.decoratorType === "Catalogue") {
      this.catalogue = true;
    } else if (this.listDecorator.decoratorType === "Trainer") {
      this.trainer = true;
    }
  }


  handleCollected(): void{
    this.listDecorator.pokemon.collected = true
    this.trainerService.apiAddPokemonToTrainer(this.listDecorator.pokemon)

    //May be deleted!
  handleDecoratorEvent(string: string): void {
    switch (string) {
      case 'collect':
        this.listDecorator.pokemon.collected = true
        this.trainerService.apiAddPokemonToTrainer(this.listDecorator.pokemon);
        break;
      case 'detail':
        this.pokemonService.selectedPokemon = this.listDecorator.pokemon
        this.pokemonService.apiGetPokemonDetails()
        break;
    }

  }
  handleRemoved(): void{
    this.listDecorator.pokemon.collected = false
    this.trainerService.apiPatchPokemon(this.listDecorator.pokemon, this.index)
  }

}
