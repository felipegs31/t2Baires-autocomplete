import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardDropComponent } from './card-drop.component';

describe('CardDropComponent', () => {
  let component: CardDropComponent;
  let fixture: ComponentFixture<CardDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDropComponent, SafeHtmlPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

