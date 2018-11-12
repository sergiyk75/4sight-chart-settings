import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ComponentItem } from './component-item';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
   private settingsUrl = 'api/categories';


  constructor(private http: HttpClient) { }

  /** GET setting categores from the server */
  getComponentCategories(): Observable<ComponentItem[]> {
    return this.http.get<ComponentItem[]>(this.settingsUrl)
      .pipe(
        tap(_ => console.log('Fetched categories')),
        catchError(this.handleError('getComponentCategories', []))
      );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
