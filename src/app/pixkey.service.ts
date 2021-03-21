import { Injectable } from '@angular/core';

import { Pixkey } from './pixKey'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class PixkeyService {

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

  getPixKey(): Observable<Pixkey[]> {
    //console.log('pixKey getPixKey')
    return this.http.get<Pixkey[]>(this.api + '/pixkey').pipe(
      tap(( ) => this.log('PixKey Ok')),
      catchError(this.handleError<Pixkey[]>('getPixKey', []))
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
    this.messageService.add(`PixkeyService: ${message}`);
  }

}
