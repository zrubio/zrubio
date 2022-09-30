import { Component, OnInit, ViewChild } from '@angular/core';

/**
 * Paginador
 */
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

/**
 * Custom
 */
import { Photo } from '../photo/shared/photo';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  dataSource = new MatTableDataSource<Photo>();
  displayedColumns = ['albumId','id','title'];

  @ViewChild(MatPaginator) matPaginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.getPhotos();
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.sort;
  }

  getPhotos(){
    this.photoService.getPhotos()
    .subscribe(photos => this.dataSource.data = photos);
  }

   applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}