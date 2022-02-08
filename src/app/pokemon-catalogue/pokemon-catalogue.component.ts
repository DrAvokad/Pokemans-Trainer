import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Input() collected: Boolean;
  @Output() clicked: EventEmitter<string> = new EventEmitter();
  collectedImg: String = "../../assets/pokball.png"

  constructor() { 
    this.pokemon = { "id": 0, "name": "Errormon", "image": "500", "collected": false }
    this.collected = false;
  }

  onCollected(): void {
    this.clicked.emit("collect")
  }

  onShowDetail(): void {
    this.clicked.emit("detail")
  }

  ngOnInit(): void {
  }

}
