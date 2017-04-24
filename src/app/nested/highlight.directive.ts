import { Directive, OnInit, ElementRef, Input } from '@angular/core';
@Directive({
    selector: '[highlight]'
})

export class HighlightDirective implements OnInit {
    el: HTMLElement;
    @Input() highlight: string;
    constructor(private ref: ElementRef) { }
    ngOnInit(): void {
        console.log("This is oninit method");
        this.el = this.ref.nativeElement;
        if (this.highlight === 'yes')
            this.el.style.background = 'yellow';
        this.el.addEventListener('click', e => { alert("You clicked at: " + e.screenX + "," + e.screenY) });
    }
}