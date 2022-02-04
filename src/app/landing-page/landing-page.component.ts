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

        // this.trainersService.fetchTrainers();
        this.trainersService.createUser();
    }

    

    // //This method runs several times beacuse of fetching
    // get trainers(): Trainer[] {
    //     return this.trainersService.trainers()
    // }
   

   
}