import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-trainer',
  templateUrl: './pokemon-trainer.component.html',
  styleUrls: ['./pokemon-trainer.component.css']
})
export class PokemonTrainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleRemovePokemon() {
    console.log("pokemon removed")
  }

}
