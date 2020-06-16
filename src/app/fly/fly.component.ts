import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Airport } from '../shared/models/airport.model';
import { Plane } from '../shared/models/plane.model';
import { AirportService } from '../shared/services/airport.service';
import { PlaneService } from '../shared/services/plane.service';

@Component({
  selector: 'app-fly',
  templateUrl: './fly.component.html',
  styleUrls: ['./fly.component.css'],
})
export class FlyComponent implements OnInit {
  public readonly form: FormGroup = this.fb.group({
    airplane: ['', [Validators.required]],
    destination: ['', [Validators.required]],
  });
  public planes: Plane[];
  public airports: Airport[];

  constructor(private readonly planeService: PlaneService, private readonly airportService: AirportService, private readonly fb: FormBuilder) {}

  public ngOnInit(): void {
    this.reloadPlanes();
    this.airportService.getAirports().subscribe((airports) => (this.airports = airports));
  }

  public flyPlane(): void {
    this.planeService.flyPlane(this.form.value.airplane, this.form.value.destination).subscribe(() => {
      alert('plane has flown.');
      this.reloadPlanes();
    });
  }

  private reloadPlanes(): void {
    this.planeService.getPlanes().subscribe((planes) => (this.planes = planes));
  }
}
