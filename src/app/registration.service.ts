import { Injectable } from '@angular/core';

import { Registration } from './registration'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

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

  getRegistration(): Observable<Registration[]> {
    console.log('getRegistration')
    return this.http.get<Registration[]>(this.api + '/registration').pipe(
      tap(( ) => this.log('Registration OK')),
      catchError(this.handleError<Registration[]>('getRegistration', []))
    )
  }

  addRegistration(registration: Registration): Observable<Registration> {
    return this.http.post<Registration>(this.api + '/registration', registration, this.httpOptions).pipe(
      tap((newRegistration: Registration) => this.log(`Add New Registration - id: ${newRegistration.id}`)),
      catchError(this.handleError<Registration>('addRegistration'))
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
