import { Component } from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'home',
  providers: [ ],
  directives: [ ],
  pipes: [ ],
  styleUrls: [ './home.style.scss' ],
  templateUrl: './home.template.html'
})
export class HomeComponent {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
