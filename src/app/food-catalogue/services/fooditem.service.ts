import { Injectable } from '@angular/core';
import { API_URL_FC } from '../../constants/url';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooditemService {
  private apiUrl = API_URL_FC + '/foodCatalogue/fetchRestaurantAndFoodItemDetailsById/'

  constructor(private http: HttpClient) { }



  getFoodItemsByRestaurant(id: number): Observable<any> {

  return this.http.get(`${this.apiUrl + id}`)
   .pipe(
    catchError(this.handleError)
   )
  }
  handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => error); // Return an observable with the error
  }

}
