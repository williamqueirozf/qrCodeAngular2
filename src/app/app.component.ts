import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  elementType : 'url' | 'canvas' | 'img' = 'url';
value : string = 'Maryane mundiça';
}
