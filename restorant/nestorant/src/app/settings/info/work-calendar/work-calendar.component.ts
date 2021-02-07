import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-calendar',
  templateUrl: './work-calendar.component.html',
  styleUrls: ['./work-calendar.component.less']
})
export class WorkCalendarComponent implements OnInit {
  public dayOfTheWeekId: Array<number> = [6,0,1,2,3,4,5]
  public dayOfTheWeekName: Array<string> = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

  constructor() { }

  ngOnInit(): void {
  }

}
