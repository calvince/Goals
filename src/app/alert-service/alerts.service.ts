import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  alertMe(message:string){
    alert(message)
  }

  constructor() { }
}
