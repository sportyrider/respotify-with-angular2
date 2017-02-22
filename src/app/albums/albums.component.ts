import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SpotifyService } from '../service/spotify.service';
import { Album } from '../model/album';


@Component({
  moduleId: module.id,
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  private sub: any;

  selectedAlbum: Album;
  albums: any[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.route.params
        .switchMap((params: Params) => this.spotifyService.getArtistAlbums(params['artist']))
        .subscribe(album => this.albums = album);

   //   for (var item of this.albums) {
   //     console.log(item.album_type + ' | ' + item.name + ' | ' + item.images[1].url + ' | ');
   //   }

    });

  }

  onSelect(album: Album): void {
    this.selectedAlbum = album;
  }

}
