import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LiveSettingsComponent } from './live/live-settings/live-settings.component';
import { LiveComponent } from './live/live.component';
import { MonitorComponent } from './live/monitor/monitor.component';
import { PredictionsComponent } from './live/predictions/predictions.component';
import { ReservationsComponent } from './live/reservations/reservations.component';
import { FloorComponent } from './settings/floor/floor.component';
import { InfoComponent } from './settings/info/info.component';
import { MenuComponent } from './settings/menu/menu.component';
import { SettingsComponent } from './settings/settings.component';
import { StaffComponent } from './settings/staff/staff.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  { path: 'settings', redirectTo: 'settings/info', pathMatch: 'full' },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: 'floor',
        component: FloorComponent,
      },
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'staff',
        component: StaffComponent,
      },
    ],
  },
  { path: 'live', redirectTo: 'live/resevations', pathMatch: 'full' },
  {
    path: 'live',
    component: LiveComponent,
    children: [
      { path: 'settings', redirectTo: 'settings/info', pathMatch: 'full' },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          {
            path: 'floor',
            component: FloorComponent,
          },
          {
            path: 'info',
            component: InfoComponent,
          },
          {
            path: 'menu',
            component: MenuComponent,
          },
          {
            path: 'staff',
            component: StaffComponent,
          },
        ],
      },
      {
        path: 'monitor',
        component: MonitorComponent,
      },
      {
        path: 'predictions',
        component: PredictionsComponent,
      },
      {
        path: 'resevations',
        component: ReservationsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
