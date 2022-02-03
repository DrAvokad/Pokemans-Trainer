import { Component, OnInit } from '@angular/core';
import { TrainesService } from '../services/trainers.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
})

export class LandingPageComponent implements OnInit {
    //Using trainers service to fetch data
    constructor(private readonly trainersService: TrainesService) {

    }

    ngOnInit(): void {
        this.trainersService.fetchTrainers();
    }

}