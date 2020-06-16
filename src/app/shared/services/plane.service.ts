import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Airport } from '../models/airport.model';
import { Plane } from '../models/plane.model';

/**
 * CRUD service for planes
 */
@Injectable({
  providedIn: 'root',
})
export class PlaneService {
  private readonly apiUrl = `${environment.apiUrl}/airplanes`;
  constructor(private readonly http: HttpClient) {}

  /** Gets all planes */
  public getPlanes(): Observable<Plane[]> {
    return this.http.get<Plane[]>(this.apiUrl);
  }

  /** Gets all planes */
  public getPlane(id: number): Observable<Plane> {
    return this.http.get<Plane>(`${this.apiUrl}/${id}`);
  }

  /**
   * Saves a plane in the database
   * @param plane Plane to add
   * @returns the saved plane (including the ID)
   */
  public savePlane(plane: Plane): Observable<Plane> {
    return this.http.post<Plane>(this.apiUrl, plane);
  }

  /**
   * Updates a plane in the database
   * @param plane Plane to update
   * @returns the updated plane
   */
  public editPlane(plane: Plane): Observable<Plane> {
    return this.http.put<Plane>(this.apiUrl, plane);
  }

  /**
   * Refuels a plane in the database
   * @param id Plane to refuel
   * @returns the refueled plane
   */
  public refuelPlane(id: number): Observable<Plane> {
    return this.http.put<Plane>(`${this.apiUrl}/refuel/${id}`, undefined);
  }

  /**
   * Deletes a plane in the database
   */
  public deletePlane(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /** Flies a plane */
  public flyPlane(plane: Plane, destination: Airport): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/move/${plane.id}/${destination.id}`, undefined);
  }
}
