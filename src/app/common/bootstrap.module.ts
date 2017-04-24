import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyModalComponent } from './myModal.component';
import { SetterComponent } from './setter.comonent';
@NgModule({
    declarations: [MyModalComponent, SetterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'myModal', component: MyModalComponent },
            { path: 'setter', component: SetterComponent }
        ])
    ],
    exports: [MyModalComponent],
    providers: []
})
export class BootstrapModule { }
