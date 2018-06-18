import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOut]'
})
export class ClickOutDirective {
  @Output() public clickOutside = new EventEmitter();
  constructor(private _elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
      // check if it was clicked inside of the dropdown element
      const isClickedInside = this._elementRef.nativeElement.contains(targetElement);

      if (!isClickedInside) {
        this.clickOutside.emit(null);
      }
    }
}
