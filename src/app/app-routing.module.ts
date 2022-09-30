import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ApiComponent } from './api/api.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OopjsComponent } from './oopjs/oopjs.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'about', component:AboutComponent },
  { path: 'api', component:ApiComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'oop', component:OopjsComponent },
  { path: 'post', component: PostComponent },
  { path: 'post-detail/:id/:userId', component: PostDetailComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'photo-detail/:id', component: PhotoDetailComponent },
  { path: 'photo-album/:albumId', component: PhotoAlbumComponent },
  { path: 'user', component: UserComponent },
  { path: 'user-detail/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }