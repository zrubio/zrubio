import { Component, OnInit } from '@angular/core';

/**
 * Custom
 */
import { Post } from '../post/shared/post';
import { PostService } from '../services/post.service';
import { User } from '../user/shared/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-save-post',
  templateUrl: './save-post.component.html',
  styleUrls: ['./save-post.component.css']
})
export class SavePostComponent implements OnInit {

  users: User[];

  constructor(
    private postService: PostService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(
      users => this.users = users
    );
  }


  //TODO
  /*savePost(id: number, title: string, body: string, userId: number) {
    
  }*/

}