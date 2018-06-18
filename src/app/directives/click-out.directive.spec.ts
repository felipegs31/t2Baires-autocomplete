import { ClickOutDirective } from './click-out.directive';
import { inject, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';


class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('ClickOutDirective', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        providers: [
          { provide: ElementRef, useClass: MockElementRef }
        ]
      });
  });
  it('should create an instance', inject([ElementRef], (elementRef: ElementRef) => {
    const directive = new ClickOutDirective(elementRef);
    expect(directive).toBeTruthy();
  }));
});
