import { Component, OnInit } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { TrainesService } from '../services/trainers.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
})

export class LandingPageComponent {
    //Using trainers service to fetch data
    constructor(private readonly trainersService: TrainesService) {
    }
    //This method runs once when component is rendered
    ngOnInit(): void {

    }

    onLoginSubmit(): void {
        //Check if users exists
        //Save user locally
        //Redirect to catalogue page
    }    

    
   

   
}