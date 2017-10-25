/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialogDataExample } from './dialog.component';

describe('DialogDataExample', () => {
  let component: DialogDataExample;
  let fixture: ComponentFixture<DialogDataExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDataExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDataExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
