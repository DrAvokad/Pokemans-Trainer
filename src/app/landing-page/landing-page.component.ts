import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainesService } from '../services/trainers.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
})

export class LandingPageComponent implements OnInit {
    //Using trainers service to fetch data by instantiating constructor.
    constructor(
        private router: Router,
        private trainerSerivce: TrainesService) {
    }
    //This method runs once when component is rendered
    ngOnInit(): void {

    }

    onLoginSubmit(form: NgForm): void {
        //Save user locally
        const { username } = form.value;
        // this.trainerSerivce.signInUser(username)
        this.trainerSerivce.createUser(username)



        // this.trainerSerivce.username = username; May be needed
        //Redirect to catalogue page
        this.router.navigateByUrl("/catalogue");





    }





}