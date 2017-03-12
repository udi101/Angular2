import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'Profile', component: ProfileComponent },
            { path: 'Login', component: LoginComponent }
        ])
    ],
    exports: [],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [],
})
export class UserModule { }
