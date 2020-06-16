import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airport } from '../shared/models/airport.model';
import { AirportService } from '../shared/services/airport.service';

@Component({
  selector: 'app-airport-edit',
  templateUrl: './airport-edit.component.html',
  styleUrls: ['./airport-edit.component.css'],
})
export class AirportEditComponent implements OnInit {
  public airport: Airport;
  public loading = true;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly airportService: AirportService, private readonly router: Router) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
        this.initializeForm(Number(paramMap.get('id')));
      } else {
        this.loading = false;
      }
    });
  }

  public onSave(airport: Airport): void {
    if (!this.airport) {
      this.airportService.saveAirport(airport).subscribe((createdAirport) => {
        this.router.navigate(['/airports']);
      });
    } else {
      this.airportService
        .editAirport({
          ...this.airport,
          name: airport.name,
        })
        .subscribe(() => {
          this.router.navigate(['/airports']);
        });
    }
  }

  private initializeForm(id: number) {
    this.loading = true;
    this.airportService.getAirport(id).subscribe((airport) => {
      this.loading = false;
      this.airport = airport;
    });
  }
}
