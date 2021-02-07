import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  public currentPage: number = 0;

  public settingsPages: Array<{name:string, link:string}> = [
    {name: "Info", link: "./info"},
    {name: "Staff", link: "./staff"},
    {name: "Menu", link: "./menu"},
    {name: "Floor", link: "./floor"},]

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  public nextPage() : void {
    this.currentPage = this.currentPage + 1;
    this.router.navigate([this.settingsPages[this.currentPage].link], {relativeTo: this.route});
  }

  public goToPage(pageLink: string) : void {
    this.currentPage = this.settingsPages.findIndex((value) => value.link == pageLink);
    this.router.navigate([pageLink], {relativeTo: this.route});
  }
}
