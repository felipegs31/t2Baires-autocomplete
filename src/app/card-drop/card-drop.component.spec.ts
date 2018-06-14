import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDropComponent } from './card-drop.component';

describe('CardDropComponent', () => {
  let component: CardDropComponent;
  let fixture: ComponentFixture<CardDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDropComponent ]
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
