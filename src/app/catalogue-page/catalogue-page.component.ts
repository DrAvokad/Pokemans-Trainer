import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.css']
})
export class CataloguePageComponent implements OnInit {
  //Hardcoded Pokemon. Replace with imported list of pokemon from API.
  testImg: string = "../../assets/pokman.png";
  testImg2: string = "../../assets/saltshakermon.png";
  pokemans: Pokemon[] = [{"id":1, "name":"Carl the Destroyermon", "image":this.testImg, "collected": true}, {"id":2, "name":"Jah mon","image":this.testImg, "collected": false}, {"id":3, "name":"Chorizo","image":this.testImg, "collected": false}, {"id":32, "name":"Saltshakermon", "image":this.testImg2, "collected":true}]

  constructor() { }

  ngOnInit(): void {
  }

}
