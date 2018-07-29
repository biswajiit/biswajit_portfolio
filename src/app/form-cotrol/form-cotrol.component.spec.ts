/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormCotrolComponent } from './form-cotrol.component';

describe('FormCotrolComponent', () => {
  let component: FormCotrolComponent;
  let fixture: ComponentFixture<FormCotrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCotrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCotrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
