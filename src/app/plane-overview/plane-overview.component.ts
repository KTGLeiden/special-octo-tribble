import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Plane } from '../shared/models/plane.model';
import { PlaneService } from '../shared/services/plane.service';

@Component({
  selector: 'app-plane-overview',
  templateUrl: './plane-overview.component.html',
  styleUrls: ['./plane-overview.component.css'],
})
export class PlaneOverviewComponent implements OnInit {
  public planes$: Observable<Plane[]>;

  constructor(private readonly planeService: PlaneService) {}

  public ngOnInit() {
    this.loadPlanes();
  }

  public onDeleteClick(plane: Plane): void {
    this.planeService.deletePlane(plane.id).subscribe(() => {
      alert('plane has been removed');
    });
  }

  public onRefuelClick(plane: Plane): void {
    this.planeService.refuelPlane(plane.id).subscribe((fueledPlane) => {
      plane.tonsOfFuel = fueledPlane.tonsOfFuel;
      alert('plane has been refueled');
    });
  }

  private loadPlanes(): void {
    this.planes$ = this.planeService.getPlanes();
  }
}
