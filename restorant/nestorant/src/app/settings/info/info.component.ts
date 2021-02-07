import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/settings.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
 
  constructor(public settings: SettingsService) { }

  ngOnInit(): void {
  }

}
