import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airport } from '../shared/models/airport.model';
import { Plane } from '../shared/models/plane.model';
import { AirportService } from '../shared/services/airport.service';
import { PlaneService } from '../shared/services/plane.service';

@Component({
  selector: 'app-plane-edit',
  templateUrl: './plane-edit.component.html',
  styleUrls: ['./plane-edit.component.css'],
})
export class PlaneEditComponent implements OnInit {
  public plane: Plane;
  public airports: Airport[];
  public loading = true;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly planeService: PlaneService,
    private readonly airportService: AirportService,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
        this.initializeForm(Number(paramMap.get('id')));
      } else {
        this.loading = false;
      }
    });
    this.getAirports();
  }

  public onSave(plane: Plane): void {
    if (!this.plane) {
      this.planeService.savePlane(plane).subscribe((newPlane) => {
        this.router.navigate(['/planes']);
      });
    } else {
      this.planeService
        .editPlane({
          ...this.plane,
          airport: plane.airport,
          name: plane.name,
        })
        .subscribe(() => {
          this.router.navigate(['/planes']);
        });
    }
  }

  private getAirports(): void {
    this.airportService.getAirports().subscribe((airports) => {
      this.airports = airports;
    });
  }

  private initializeForm(id: number) {
    this.loading = true;
    this.planeService.getPlane(id).subscribe((plane) => {
      this.loading = false;
      this.plane = plane;
    });
  }
}
