import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Airport } from '../shared/models/airport.model';
import { AirportService } from '../shared/services/airport.service';

@Component({
  selector: 'app-airport-overview',
  templateUrl: './airport-overview.component.html',
  styleUrls: ['./airport-overview.component.css'],
})
export class AirportOverviewComponent implements OnInit {
  public airports$: Observable<Airport[]>;

  constructor(private readonly airportService: AirportService) {}

  public ngOnInit() {
    this.loadAirports();
  }

  public onDeleteClick(airport: Airport): void {
    this.airportService.deleteAirport(airport.id).subscribe(() => {
      alert('airport has been removed');
      this.loadAirports();
    });
  }

  private loadAirports(): void {
    this.airports$ = this.airportService.getAirports();
  }
}
