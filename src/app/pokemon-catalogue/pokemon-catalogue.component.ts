import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.component.html',
  styleUrls: ['./pokemon-catalogue.component.css']
})
export class PokemonCatalogueComponent implements OnInit {

  constructor() { }

  collected: Boolean = false

  ngOnInit(): void {
  }

}
