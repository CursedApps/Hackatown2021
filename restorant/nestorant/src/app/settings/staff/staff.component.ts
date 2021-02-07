import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.less']
})
export class StaffComponent implements OnInit {
  public staff: Array<string> = []

  constructor() { }

  ngOnInit(): void {
  }

  public addStaff(): void {
    this.staff.push("member");
  }

}
