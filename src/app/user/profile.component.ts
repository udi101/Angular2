import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})

export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    firstName:FormControl;
    lastName:FormControl;

    constructor(
        private authService: AuthService,
        private router: Router) { }

    ngOnInit() {
         this.firstName = new FormControl(
            this.authService.currentUser == null ? '' : this.authService.currentUser.firstName,
            [Validators.required, Validators.pattern('^[a-zA-Z].*')]);

        this.lastName = new FormControl(
            this.authService.currentUser == null ? '' : this.authService.currentUser.lastName,
            Validators.required);
            
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    saveProfile(formValues): void {
        if (this.profileForm.valid) {
            this.authService.updateUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['Worker']);
        }
    }

    // === cancel פונקציה המתבצעת כאשר לוחצים על 
    cancel(): void {
        this.router.navigate(['Worker']);
    }

    validateFirstName():boolean{
        return this.firstName.invalid && this.firstName.touched
    }

    validateLastName():boolean{
        return this.lastName.invalid && this.lastName.touched
    }
}
