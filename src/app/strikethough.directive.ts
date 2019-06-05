import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethough]'
})
export class StrikethoughDirective {
  @HostListener('click') onClicks(){
    this.textDeco('line-through');
  }
  @HostListener('dblclick') onDoubleclicks() {
    this.textDeco('none');
  }
  constructor(private elem: ElementRef) {
  }
  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }

}
