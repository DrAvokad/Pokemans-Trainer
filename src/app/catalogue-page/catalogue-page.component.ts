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
  pokemans: Pokemon[] = [{"id":1, "name":"Carl the Destroyermon", "image":this.testImg}, {"id":2, "name":"Jah mon","image":this.testImg}, {"id":3, "name":"Chorizo","image":this.testImg}]

  constructor() { }

  ngOnInit(): void {
  }

}
