import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

/**
 * Custom
 */
import { User } from '../user/shared/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dataSource = new MatTableDataSource<User>();
  displayedColumns = ['id','name','username','email'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.dataSource.data = users);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}