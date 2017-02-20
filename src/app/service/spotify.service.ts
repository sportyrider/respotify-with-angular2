import { Album} from '../model/album';
import { SAlbum } from '../model/salbum';
import { ALBUMS } from '../model/mock-albums';
import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyService {

  private heroesUrl = 'https://api.spotify.com/v1/search?q=sia&type=album';  // URL to web api

  constructor(private http: Http) { }

  getAlbums(): Promise<Album[]> {
    return Promise.resolve(ALBUMS);
  }

  getAlbum(id: number): Promise<Album> {
    return this.getAlbums()
      .then(albums => albums.find(album => album.id === id));

  }

  getAlbumsApi(): Promise<SAlbum[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as SAlbum[])
      .catch(this.handleError);
  }

    getAlbumsApiString(): Promise<String> {
      console.log('Making http get...');
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().albums.items[0].name)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

