import { Component } from '@angular/core';

/**
 * Generated class for the WebChipsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'web-chips',
  templateUrl: 'web-chips.html'
})
export class WebChipsComponent {

  text: string;

  constructor() {
    console.log('Hello WebChipsComponent Component');
    this.text = 'Hello World';
  }

}
