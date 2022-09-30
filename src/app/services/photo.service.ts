import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Photo } from '../photo/shared/photo';
import { MessageService } from '../services/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PhotoService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos`)
      .pipe(
      tap(photos => this.log('OK')),
      catchError(this.handleError('getPhotos', []))
      );
  }

  getPhoto(id: number): Observable<Photo> {
    const url = `https://jsonplaceholder.typicode.com/photos?id=${id}`;
    return this.http.get<Photo>(url).pipe(
      tap(photo => this.log('OK')),
      catchError(this.handleError<Photo>(`photo id=${id}`))
    );
  }

  getPhotoAlbum(albumId: number): Observable<Photo[]> {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${id}`;
    return this.http.get<Photo[]>(url).pipe(
      tap(photos => this.log('OK')),
      catchError(this.handleError<Photo[]>('getPhotoAlbum',[]))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('PhotoService: ' + message);
  }
}