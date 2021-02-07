import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SettingsComponent } from './settings/settings.component';
import { InfoComponent } from './settings/info/info.component';
import { StaffComponent } from './settings/staff/staff.component';
import { MenuComponent } from './settings/menu/menu.component';
import { FloorComponent } from './settings/floor/floor.component';
import { LiveComponent } from './live/live.component';
import { ReservationsComponent } from './live/reservations/reservations.component';
import { PredictionsComponent } from './live/predictions/predictions.component';
import { MonitorComponent } from './live/monitor/monitor.component';
import { LiveSettingsComponent } from './live/live-settings/live-settings.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChooseAccountComponent } from './choose-account/choose-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SettingsComponent,
    InfoComponent,
    StaffComponent,
    MenuComponent,
    FloorComponent,
    LiveComponent,
    ReservationsComponent,
    PredictionsComponent,
    MonitorComponent,
    LiveSettingsComponent,
    RegisterComponent,
    LoginComponent,
    ChooseAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
