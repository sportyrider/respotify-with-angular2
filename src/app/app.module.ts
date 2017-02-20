import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlbumsComponent } from './albums/albums.component';
import { SongsComponent } from './songs/songs.component';

import { AppRoutingModule } from './app-routing.module';
import { SpotifyService } from './service/spotify.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AlbumsComponent,
    SongsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
