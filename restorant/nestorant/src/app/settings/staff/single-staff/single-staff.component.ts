import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-staff',
  templateUrl: './single-staff.component.html',
  styleUrls: ['./single-staff.component.less']
})
export class SingleStaffComponent implements OnInit {
  @Input() public person: string;

  constructor() { }

  ngOnInit(): void {
  }

}
