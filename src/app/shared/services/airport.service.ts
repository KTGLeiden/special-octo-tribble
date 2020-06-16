import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Airport } from '../models/airport.model';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  private readonly apiUrl = `${environment.apiUrl}/airports`;
  constructor(private readonly http: HttpClient) {}

  /** Gets all airports */
  public getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(this.apiUrl);
  }

  /** Gets all airports */
  public getAirport(id: number): Observable<Airport> {
    return this.http.get<Airport>(`${this.apiUrl}/${id}`);
  }

  /**
   * Saves a airport in the database
   * @param airport Airport to add
   * @returns the saved airport (including the ID)
   */
  public saveAirport(airport: Airport): Observable<Airport> {
    return this.http.post<Airport>(this.apiUrl, airport);
  }

  /**
   * Updates a airport in the database
   * @param airport Airport to update
   * @returns the saved airport (including the ID)
   */
  public editAirport(airport: Airport): Observable<Airport> {
    return this.http.put<Airport>(this.apiUrl, airport);
  }

  /**
   * Updates a airport in the database
   * @returns the saved airport (including the ID)
   */
  public deleteAirport(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
