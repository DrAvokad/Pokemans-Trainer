import { Component, OnInit, Input } from '@angular/core';
import { ListItemDecorator } from '../models/list-item-decorator.model';
import { TrainesService } from '../services/trainers.service';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {
  @Input() listDecorator: ListItemDecorator;
  @Input() index: number;

  //Boolean to determine what decorator to render
  catalogue: Boolean = false
  trainer: Boolean = false

  constructor(private trainerService: TrainesService, private pokemonService: PokemonService) {
    this.listDecorator = {"pokemon":{"id":0,"name":"Errormon","image":"500","collected":false}, "decoratorType":"Catalogue"}
    this.index = 0;
  }

  //Sets decorator boolean dempending on input
  ngOnInit(): void {
    if (this.listDecorator.decoratorType === "Catalogue") {
      this.catalogue = true;
    } else if (this.listDecorator.decoratorType === "Trainer") {
      this.trainer = true;
    }
  }

  //Uses the emitted event to do either
  //"collect": sets the collected boolean this list item's Pokemon object to true and pushes it to the user API
  //"detail": sets the selected Pokemon in the Pokemon Service to the Pokemon of this list item
  handleDecoratorEvent(string: string): void {
    switch (string) {
      case 'collect':
        this.listDecorator.pokemon.collected = true
        this.trainerService.apiAddPokemonToTrainer(this.listDecorator.pokemon);
        break;
      case 'detail':
        this.pokemonService.selectedPokemon = this.listDecorator.pokemon;
        this.pokemonService.apiGetPokemonDetails()
        break;
    }

  }

  //Sets the collected boolean of this list item's Pokemon object to false and pushes it to the user API
  handleRemoved(): void{
    this.listDecorator.pokemon.collected = false
    this.trainerService.apiPatchPokemon(this.listDecorator.pokemon, this.index)
  }

}
