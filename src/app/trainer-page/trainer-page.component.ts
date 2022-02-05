import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemans';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {
  constructor() {}

  pokemons = POKEMONS

  ngOnInit(): void {

  }
}
