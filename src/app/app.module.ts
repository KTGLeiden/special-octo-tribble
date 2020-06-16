import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AirportEditComponent } from './airport-edit/airport-edit.component';
import { AirportFormComponent } from './airport-form/airport-form.component';
import { AirportOverviewComponent } from './airport-overview/airport-overview.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyComponent } from './fly/fly.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaneEditComponent } from './plane-edit/plane-edit.component';
import { PlaneFormComponent } from './plane-form/plane-form.component';
import { PlaneOverviewComponent } from './plane-overview/plane-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaneOverviewComponent,
    HomeComponent,
    NavbarComponent,
    FlyComponent,
    PlaneFormComponent,
    PlaneEditComponent,
    AirportOverviewComponent,
    AirportEditComponent,
    AirportFormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
