import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventsService } from './events.service';
import { IEvent } from './event.interface';

@Component({
    templateUrl: './addReactive.component.html',
    styleUrls: ['./addReactive.component.css'],
    providers: [EventsService]
})
export class AddReactiveComponent implements OnInit {
    eventName: FormControl;
    addReactiveForm: FormGroup;

    // Dependancy Injection of events Service
    constructor(private eventService: EventsService) { }

    ngOnInit() {
        this.eventName = new FormControl('', [Validators.required,
        Validators.pattern('^[^\\d]*$'),
        Validators.minLength(3),
        this.restrictedWordsValidator(['erez', 'mazor'])
        ]);
        let startDate = new FormControl('', Validators.required);
        let endDate = new FormControl('', Validators.required);
        let eventPrice = new FormControl('', Validators.required)
        let city = new FormControl('', Validators.required);
        let street = new FormControl('', Validators.required);
        let streetNumber = new FormControl('', [Validators.required, Validators.pattern('\\d*$')]);
        this.addReactiveForm = new FormGroup({
            eventName: this.eventName,
            startDate: startDate,
            endDate: endDate,
            eventPrice: eventPrice,
            city: city,
            street: street,
            streetNumber: streetNumber
        });
    }


    // custom validator returns null if no erros found.
    // if errors does found it returns an errorObject 
    // {[key:string:any]}

    restrictedWordsValidator(words) {
        return (control: FormControl): { [key: string]: any } => {
            if (!words) return null;
            let invalidWords = words.map(w => control.value.includes(w) ? w : null)
                .filter(w => w != null);
            return invalidWords && invalidWords.length > 0
                ? { 'restrictedWords': invalidWords.join(', ') }
                : null
        }
    }

    save(formValues): void {
        let event: IEvent = {
            eventName: formValues.eventName,
            startDate: formValues.startDate,
            endDate: formValues.endDate,
            eventPrice: formValues.eventPrice,
            location: {
                city: formValues.city,
                street: formValues.street,
                streetNumber: formValues.streetNumber
            }
        }
        console.log(event);
        this.eventService.addEvent(event);
    }

}