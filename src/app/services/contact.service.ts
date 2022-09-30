
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from '../contact/shared/contact';
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Access-Control-Allow-Headers': 'Content-Type, x-requested-with,Access-Control-Allow-Headers'
    }
  )
};

const url = 'https://nodemail-zrubio.c9users.io:3000/formulario';

@Injectable()
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(body) {

    return this.http.post(url,body);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

