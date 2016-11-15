import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  onUpdate(event) {
    console.log()
  }

  constructor(@Inject('mail') private mail) {};
}
