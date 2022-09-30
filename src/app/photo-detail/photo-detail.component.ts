import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Photo } from '../photo/shared/photo';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  photo: Photo;
  id: number;
  sub: any;
  fill: any;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private location: Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => this.id = params['id']
    );
    this.getPhoto();
  }

  getPhoto() {
    this.photoService.getPhoto(this.id)
      .subscribe(photo => this.photo = photo[0]);
  }
}