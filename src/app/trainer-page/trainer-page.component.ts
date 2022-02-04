import { Component, OnInit } from '@angular/core';
import { USER } from '../mock-user';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {
  constructor() {}
  user = USER

  ngOnInit(): void {

  }

  handleRemovePokemon(pokemon: string) {
    console.log("Removed pokemon: ", pokemon)
  }

}
