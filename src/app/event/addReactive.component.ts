import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IEvent } from './event.interface';

@Component({
    templateUrl: './addReactive.component.html',
    styleUrls: ['./addReactive.component.css']
})
export class AddReactiveComponent implements OnInit {
    eventName: FormControl;
    addReactiveForm: FormGroup;
    ngOnInit() {
        this.eventName = new FormControl('', [Validators.required,
        Validators.pattern('^[^\\d]*$'),
        Validators.minLength(3),
        this.restrictedWordsValidator
        ]);
        let startDate = new FormControl('', Validators.required);
        let endDate = new FormControl('', Validators.required);
        let city = new FormControl('', Validators.required);
        let street = new FormControl('',Validators.required);
        let streetNumber = new FormControl('',Validators.required);
        this.addReactiveForm = new FormGroup({
            eventName: this.eventName,
            startDate: startDate,
            endDate: endDate,
            city: city,
            street:street,
            streetNumber:streetNumber
        });
    }

    restrictedWordsValidator(control: FormControl): { [key: string]: any } {

            return control.value.includes('udi')
                ? {'restrictedWords':'udi'}
                : null;
    }

    save(formValues): void {
        let event: IEvent = {
            eventName: formValues.eventName,
            startDate: formValues.startDate,
            endDate: formValues.endDate,
            location: {
                city: formValues.city,
                street: formValues.street,
                streetNumber: formValues.streetNumber
            }
        }
        console.log(event);
    }

}