import { Component, OnInit } from '@angular/core';
import {Newgoal} from '../goal';
import { Goals } from '../goals';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = Goals;
  // goals = [
  //   new Newgoal(1, 'Get some food', 'This food is so awesome', new Date(2019, 4, 29)),
  //   new Newgoal(1, 'I work work work', 'This food is so awesome', new Date(2019, 4, 30)),
  //   new Newgoal(1, 'Karaoke Night ', 'Gbona : Burna boy', new Date(2019, 4, 31)),
  //   new Newgoal(1, 'KOT Aside ', 'Tonight we are dunda Dundaing', new Date(2019, 5, 1)),
  // ];
  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
    console.log('I work');
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }


}
