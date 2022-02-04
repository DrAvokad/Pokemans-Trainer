import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trainer } from '../models/trainer.model';
import { TrainesService } from '../services/trainers.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
})

export class LandingPageComponent implements OnInit{
    //Using trainers service to fetch data
    constructor() {
    }
    //This method runs once when component is rendered
    ngOnInit(): void {

    }

    onLoginSubmit(form: NgForm): void {
        console.log(form.value);
        
        //Check if users exists
        //Save user locally
        //Redirect to catalogue page
    }    

    
   

   
}