import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportEditComponent } from './airport-edit/airport-edit.component';
import { AirportOverviewComponent } from './airport-overview/airport-overview.component';
import { FlyComponent } from './fly/fly.component';
import { HomeComponent } from './home/home.component';
import { PlaneEditComponent } from './plane-edit/plane-edit.component';
import { PlaneOverviewComponent } from './plane-overview/plane-overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planes', component: PlaneOverviewComponent },
  { path: 'planes/add', component: PlaneEditComponent },
  { path: 'planes/:id/edit', component: PlaneEditComponent },
  { path: 'airports', component: AirportOverviewComponent },
  { path: 'airports/add', component: AirportEditComponent },
  { path: 'airports/:id/edit', component: AirportEditComponent },
  { path: 'flight', component: FlyComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
