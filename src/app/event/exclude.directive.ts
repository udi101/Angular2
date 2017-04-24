import { Directive,Input,ElementRef,OnInit} from '@angular/core';
@Directive({
    selector:'[exclude]'
})
export class ExcludeDirective implements OnInit{
@Input() exclude:string;

constructor(private elemtRef:ElementRef){}

ngOnInit(){
   this.elemtRef.nativeElement.style.color = 'red';
}
}
