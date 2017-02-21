import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SpotifyService } from '../service/spotify.service';
import { Album } from '../model/album';
import { SAlbum } from '../model/salbum';

@Component({
  moduleId: module.id,
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  album: Album;
//  albums: Album[];

  id: string;
  private sub: any;
  selectedAlbum: Album;

  salbums: SAlbum[];

  out: String;

  albums: any[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {

      this.id = params['artist']; // (+) converts string 'id' to a number
      console.log('found' + this.id);
    
      // In a real app: dispatch action to load the details here.

      this.route.params
        .switchMap((params: Params) => this.spotifyService.getAlbum(+params['artist']))
        .subscribe(album => this.album = album);

   //   this.spotifyService.getAlbums().then(albums => this.albums = albums);
    //  this.spotifyService.getAlbumsApi().then(salbums => this.salbums = salbums);
    //  this.spotifyService.getAlbumsApiString().then(out => this.out = out);
   //   console.log('API:'+this.salbums);
   //   console.log('API2:'+this.out);

     //  this.spotifyService.getArtistAlbums().then(album => this.albums = album);

      this.route.params
        .switchMap((params: Params) => this.spotifyService.getArtistAlbums(params['artist']))
        .subscribe(album => this.albums = album);

  //     for (var item of this.albums) {
  //        console.log(item.album_type +' | '+ item.name + ' | '+ item.images[1].url); 
  //     }       
    });

  }

  onSelect(album: Album): void {
    this.selectedAlbum = album;

  }

}
