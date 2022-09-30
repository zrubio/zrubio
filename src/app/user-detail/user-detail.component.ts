import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../user/shared/user';
import { UserService } from '../services/user.service';
import { Post } from '../post/shared/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  posts: Post[];
  user: User;
  id: number;
  sub: any;

  dataSource: Post[];
  displayedColumns = ['id','title','body'];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => this.id = params['id']);
    this.getUser();
    this.getPostsByUser();
  }

  public getUser() {
    this.userService.getUser(this.id)
      .subscribe(user => this.user = user[0]);
  }

  public getPostsByUser() {
    this.postService.getPostByUser(this.id)
      .subscribe(
      posts => this.dataSource = posts
      )
  }

  goBack(): void {
    this.location.back();
  }
}