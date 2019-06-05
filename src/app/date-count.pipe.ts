import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate() );
    let dateDifference = Math.abs(value - todayWithNoTime);
    const secondInDays = 86400;

    let dateDifferenceSeconds = dateDifference * 0.001;
    let dateCounter = dateDifferenceSeconds / secondInDays;

    if (dateCounter >= 1 && value > todayWithNoTime ) {
      return dateCounter;
    } else {
      return 0;
    }
  }

}
