/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P404Component } from './p404.component';

describe('404Component', () => {
  let component: P404Component;
  let fixture: ComponentFixture<P404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
