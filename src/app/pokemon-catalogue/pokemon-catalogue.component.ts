import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent implements OnInit {
  @Input() collected: boolean;
  @Output() clicked: EventEmitter<string> = new EventEmitter();
  collectedImg: String = "../../assets/pokball.png"

  constructor() { 
    this.collected = false
  }

  onCollected(): void {
    this.collected = true;
    this.clicked.emit()
  }

  ngOnInit(): void {
  }

}
