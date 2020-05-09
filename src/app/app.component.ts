import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Typing-Game';
  completed = true;
  enteredText = '';

  sentence = lorem.sentence();

  textInput(e: string) {
    this.enteredText = e;
  }

  colorText(a: string,b: string) {
    if(!b) {
      return 'pending'
    }
    return a === b ? 'correct' : 'incorrect';
  }


}
