import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../post/shared/post';
import { MessageService } from '../services/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PostService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(
      tap(posts => this.log('OK')),
      catchError(this.handleError('getPosts', []))
      );
  }

  getPost(id: number): Observable<Post> {
    const url = `https://jsonplaceholder.typicode.com/posts?id=${id}`;
    return this.http.get<Post>(url).pipe(
      tap(posts => this.log('OK')),
      catchError(this.handleError<Post>(`post id=${id}`))
    );
  }

  getPostByUser(userId: number): Observable<Post[]> {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    return this.http.get<Post[]>(url).pipe(
      tap(posts => this.log('OK')),
      catchError(this.handleError('getPosts', []))
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
    this.messageService.add('PostService: ' + message);
  }
}