import { Component, OnInit } from '@angular/core';

/**
 * Custom
 */
import {Photo} from '../photo/shared/photo';
import {PhotoService} from '../services/photo.service';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent implements OnInit {

  photos: Photo[];

  constructor
  (
    private photoService: PhotoService
  ) {}

  ngOnInit() {

  }

  getPhotoAlbum(id: number){
    this.photoService.getPhotoAlbum(id)
    .subscribe(
      photos => this.photos = photos
    );
  }

}