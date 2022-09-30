import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

/**
 * Paginador
 */
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

/**
 * Custom
 */
import { Post } from '../post/shared/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  dataSource = new MatTableDataSource<Post>();
  displayedColumns = ['id','title','userId'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sorter: MatSort;

  constructor(private postService: PostService) {}

  ngOnInit() {
     this.getPosts();
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sorter;
  }

  getPosts(): void{
    this.postService.getPosts()
    .subscribe(posts => this.dataSource.data = posts);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}