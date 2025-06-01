import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL_RL } from '../../constants/url';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = API_URL_RL + '/restaurant/getAllRestaurants'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // Fetch all restaurants
  getAllRestaurants(): Observable<any> {
    return this.http.get(`${this.apiUrl}`).pipe(
        catchError(this.handleError)
    );
  }

 private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); // Log the error to the console
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

}