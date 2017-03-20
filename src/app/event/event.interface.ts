export class IEvent{
    eventName:string;
    startDate: Date;
    endDate: Date;
    location:{
        city:string;
        street: string;
        streetNumber: number;
    }
}