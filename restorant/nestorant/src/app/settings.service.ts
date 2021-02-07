import { Injectable } from '@angular/core';

export class StaffMember {
  public name: string = "name";
  public email: string = "email@example.com";
  public image: string = "";
  public role: string = "";
}

export class Recipe {
  public name: string = "RECIPE";
  public ingredients: Array<{ingrediant: string, qt: number}> = [] 
}

export class Table {
  public name: string = "Table";
  public minAvailable : number = 0;
  public maxAvailable : number = 10;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public image: string= "";
  public name: string= "";
  public address: string = "";
  public phone: number;
  public openingTimes: Array<{start: number, end: number}> = [];
  public closedDays: Array<Date> = [];
  public staff: Array<StaffMember> = [];
  public recipes: Array<Recipe> = [];
  public categories: Array<{name: string, recipes: Array<string>}> = [];
  public tables: Array<Table> = [];
  public maxReservation: number = 0.8;
  public reservationTime: number = 200;

  constructor() {  }
}
