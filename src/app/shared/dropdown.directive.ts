import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // @HostListener('click', ['$event.click']) onclick = (e: Event) => {
  //   this.elRef.nativeElement.classList.toggle('open');
  // };

  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('document:click', ['$event']) toggleOpen(e: Event) {
    this.isOpen = this.elRef.nativeElement.contains(e.target)
      ? !this.isOpen
      : false;
  }

  // @HostListener('click', ['$event.click']) onclick = (e: Event) => {
  //   this.isOpen = !this.isOpen;
  // };

  constructor(private elRef: ElementRef) {}
}
