import { Directive, HostListener} from '@angular/core';

@Directive({
  selector:'[scrolldetect]',
})
export class ScrollDirective
{
    consturctor()
    { 
    }

    @HostListener("window:scroll",['$event']) 
    onWindowScroll(event)
    {
      console.log('scrolling not allowed'); 
    }
}