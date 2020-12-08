import { Component, HostListener,  VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  @HostListener('window:scroll') onEventHandler()
  {
    console.log('scrolling not allowed'); 
  }

}
