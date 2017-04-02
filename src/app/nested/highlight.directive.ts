import {Directive} from '@angular/core';
@Directive({
    selector:"[highlight]"
})
export class HighlightDirective{
    t:string = "udi mazor";
}