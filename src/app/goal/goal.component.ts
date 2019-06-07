import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Quote } from '../quote-class/quote'
import { Goals } from '../goals';
import { GoalService } from '../goals/goal.service'
import { AlertsService } from '../alert-service/alerts.service';
import { QuoteRequestService } from '../quote-http/quote-request.service'


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers:[GoalService,QuoteRequestService],
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  alertService:AlertsService;
  goals = Goals;
  quote:Quote;
  constructor(goalService:GoalService,alertService:AlertsService,private quoteService:QuoteRequestService){
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }
  
  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
    console.log('I work');
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want delete ${this.goals[index].name}`)

      if(toDelete){
        this.goals.splice(index,1)
        this.alertService.alertMe('Goal has been deleted')
      }
    }
  }

  ngOnInit() {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
    // interface ApiResponse{
    //   quote:string;
    //   author:string;
    // }
    // this.http.get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json').subscribe(data =>{
    //   this.quote = new Quote (data.quote,data.author)
    // },err=>{
    //   this.quote = new Quote('Never,never,never give up,','Winston churchill')
    //     console.log('Error occured')

    // })
  }

}
