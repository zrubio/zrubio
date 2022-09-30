import '../polyfills';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MessageComponent } from './message/message.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Material Angular
 */
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCell,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { SavePostComponent } from './save-post/save-post.component';


/**
 * Custom services
 */

import { MessageService } from './services/message.service';
import { PhotoService } from './services/photo.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { PhotoPipe } from './photo/photo.pipe';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './services/contact.service';
import { OopjsComponent } from './oopjs/oopjs.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  declarations:
  [
    AppComponent,
    DashboardComponent,
    PhotoComponent,
    PhotoDetailComponent,
    PostComponent,
    PostDetailComponent,
    UserComponent,
    UserDetailComponent,
    MessageComponent,
    SavePostComponent,
    PhotoPipe,
    PhotoAlbumComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    OopjsComponent,
    ApiComponent
  ],
  bootstrap:
  [
    AppComponent
  ],
  providers:
  [
    MessageService,
    PhotoService,
    PostService,
    UserService,
    ContactService,
    FormBuilder
  ]
})

export class AppModule { }