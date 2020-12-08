import { Directive } from '@angular/core';

@Directive({
  selector:'scrolldetect',
})
export class ScrollDirective
{
  constructor()
  {
    // @HostListener('window:scroll')
    // {
    //   console.log('scrolling not allowed'); 
    // }
  }

}