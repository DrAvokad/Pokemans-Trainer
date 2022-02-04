import { Component, OnInit, Input } from '@angular/core';
import { ListItemDecorator } from '../models/list-item-decorator.model';


@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {
  @Input() listDecorator: ListItemDecorator;

  catalogue: Boolean = false
  trainer: Boolean = false

  constructor() {
    this.listDecorator = {"pokemon":{"id":0,"name":"Errormon","image":"500","collected":false}, "decoratorType":"Catalogue"}
   }

  ngOnInit(): void {
    if(this.listDecorator.decoratorType === "Catalogue"){
      this.catalogue = true;
    }else if(this.listDecorator.decoratorType === "Trainer"){
      this.trainer = true;
    }
  }

}
