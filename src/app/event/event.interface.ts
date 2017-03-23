export class IEvent{
    eventName:string;
    startDate: Date;
    endDate: Date;
    eventPrice:number;
    location:{
        city:string;
        street: string;
        streetNumber: number;
    }
}