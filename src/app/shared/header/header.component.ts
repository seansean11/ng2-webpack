import { Component } from '@angular/core';

@Component({
  selector: 'nw-header',
  templateUrl: './header.template.html',
  styles: [ './header.style.scss' ]
})
export class HeaderComponent {
  title: string;

  constructor() {

  }
}
