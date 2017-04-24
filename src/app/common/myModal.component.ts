import { Component, ViewChild, ElementRef, Inject, OnInit, Input } from '@angular/core';
import { JQ_TOKEN } from './../common/index';
@Component({
    selector: 'my-modal',
    templateUrl: './myModal.component.html',
    styleUrls: ['myModal.component.css']
})
export class MyModalComponent implements OnInit {
    @Input() isOpen: string;
    @Input() modalColor:string;
    @ViewChild('udi') el: ElementRef;
    constructor( @Inject(JQ_TOKEN) private jQuery: any) { }
    ngOnInit() {
        if (this.isOpen == "true")
            this.jQuery(this.el.nativeElement).modal();
        this.jQuery(this.el.nativeElement).css("color", this.modalColor);
    }
}