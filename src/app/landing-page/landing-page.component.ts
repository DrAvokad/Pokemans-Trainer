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
        //If user is stored in local storage then redirect to catalogue page
        if(localStorage.getItem("trainer-username")?.length !== null) {
            this.router.navigateByUrl("/catalogue")
        }
    }

    onLoginSubmit(form: NgForm): void {
        //Fetch userinput and user trainerservice to sign in user
        const { username } = form.value;
        this.trainerSerivce.signInUser(username)
    }
}