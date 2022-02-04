import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent implements OnInit {
  @Input() collected: boolean;
  collectedImg: String = "../../assets/pokball.png"

  constructor() { 
    this.collected = false
  }

  

  ngOnInit(): void {
  }

}
