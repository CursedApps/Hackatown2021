import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/settings.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.less']
})
export class HolidaysComponent implements OnInit {
  constructor(public settings: SettingsService) { }

  ngOnInit(): void {
  }

  public newHoliday() {
    this.settings.closedDays.push(new Date());
  }

}
