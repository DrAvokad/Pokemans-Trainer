import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
@Component({
  selector: 'app-pokemon-trainer',
  templateUrl: './pokemon-trainer.component.html',
  styleUrls: ['./pokemon-trainer.component.css']
})
export class PokemonTrainerComponent implements OnInit {
  @Output() rmClick: EventEmitter<string> = new EventEmitter()
  @Input() pokemon: Pokemon = {name: "", id: 0, image: "", collected: false}
  
  constructor() { }

  ngOnInit(): void {
  }

  handleRemovePokemon(){
    this.rmClick.emit()
  }
}
