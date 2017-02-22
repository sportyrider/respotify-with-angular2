import { Album } from '../model/album';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyService {


  constructor(private http: Http) { }

  getArtistAlbums(artist: string): Promise<any[]> {
    let url = `https://api.spotify.com/v1/search?q=${artist}&type=album`;  // URL to web api

    if (artist && artist.length > 0) {
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().albums.items as any[])
        .catch(this.handleError);
    }
  }


  getAlbumTracks(albumId: string): Promise<any[]> {
    let url = `https://api.spotify.com/v1/albums/${albumId}`;  // URL to web api

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().tracks.items as any[])
      .catch(this.handleError);
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

