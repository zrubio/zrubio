import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


import { Post } from './post/shared/post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  menuItems = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
  menuLinks = ['/post', '/comment', '/album', '/photo', '/todo', '/user'];


  constructor() { 
  }

  ngOnInit(): void {
  }


}
