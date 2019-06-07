import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertsService } from './alert-service/alerts.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethoughDirective } from './strikethough.directive';
import { DateCountPipe } from './date-count.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { RouterModule,Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'
  

//defining routes
const routes:Routes=[
  {path:'goals',component:GoalComponent},
  {path:'about',component:AboutComponent},
  {path:"",redirectTo:"/goals",pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethoughDirective,
    DateCountPipe,
    AboutComponent,
    NotFoundComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
