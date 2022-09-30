import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../post/shared/post';
import { PostService } from '../services/post.service';
import { User } from '../user/shared/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;
  user: User;
  params: any;
  id: number;
  userId: any;
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => this.id = params['id']
    );
    this.sub = this.route.params.subscribe(
      params => this.userId = params['userId']
    );
    this.getPost();
    this.getUser();
  }

  public getPost() {
    this.postService.getPost(this.id)
      .subscribe(post => this.post = post[0]);
  }

  public getUser(){
    this.userService.getUser(this.userId)
    .subscribe(user => this.user = user[0]);
  }

  goBack(): void {
    this.location.back();
  }

}