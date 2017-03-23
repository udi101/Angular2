import { Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'street'})
export class StreetPipe implements PipeTransform{

    transform(value:string):string{
        return value + " St.";
    }
}