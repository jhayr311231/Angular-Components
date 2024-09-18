import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Components';


  message: string = '';

  showMessage() {
    this.message = 'Hello World';



  }
}
