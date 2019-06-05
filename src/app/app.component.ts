import { Component , OnInit} from '@angular/core';
import {Goal} from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Goals';
  goal = 'You want to see my Goals?';
  goals = [
    new Goal(1, 'Watch Dj S'),
    new Goal(2, 'Buy cookies'),
    new Goal(3, 'Get new phone case'),
    new Goal(4, 'Get dog food'),
    new Goal(5, 'Solve math homework'),
  ];
}
