import { Injectable } from '@angular/core';
import { IProduct } from './product';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = './assets/products/products.json';
  constructor(private http: HttpClient) { }


  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)),
      catchError(this.handleError))
    );
  }
  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infraestructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-siide or network error occured. Handle it accordingly
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // The backend returned an unsuccesful response code.
      // The response body may ocntain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  // getProducts(): IProduct[] {
  //   return [
  //     {
  //       productId: 2,
  //       productName: 'Martillo',
  //       productCode: 'X-42325',
  //       releaseDate: '1 Marzo',
  //       description: 'Martillo',
  //       price: 3.20,
  //       starRating: 3.6,
  //       imageUrl: 'assets/images/martillo.png'
  //     },
  //     {
  //       productId: 2,
  //       productName: 'Sierra',
  //       productCode: 'E-4552B3',
  //       releaseDate: '1 Marzo',
  //       description: 'Sierra',
  //       price: 2,
  //       starRating: 4.1,
  //       imageUrl: 'assets/images/sierra.png'
  //     }
  //   ];
  // }
}
