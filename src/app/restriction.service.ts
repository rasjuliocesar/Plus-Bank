import { Injectable } from '@angular/core';

import { Restriction } from './restriction'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RestrictionService {

  private api = 'http://localhost:8080'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'text' as 'json',
    }),
  };

  httpOptionsPlain = {
    headers: new HttpHeaders({
      Accept: 'text/plain',
      'Content-Type': 'text/plain',
    }),
    responseType: 'text',
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getRestriction(): Observable<Restriction[]> {
    console.log('getRestriction')
    return this.http.get<Restriction[]>(this.api + '/restriction').pipe(
      tap(( ) => this.log('Restriction OK')),
      catchError(this.handleError<Restriction[]>('getRestriction', []))
    )
  }

  addRestriction(restriction: Restriction): Observable<Restriction> {
    return this.http.post<Restriction>(this.api + '/restriction', restriction, this.httpOptions).pipe(
      tap((newRestriction: Restriction) => this.log(`Add New Restriction - id: ${newRestriction.id}`)),
      catchError(this.handleError<Restriction>('addRestriction'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`RegistrationService: ${message}`);
  }

}
