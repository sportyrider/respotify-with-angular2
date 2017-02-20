import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';
import { Album } from '../model/album';

@Component({
  moduleId: module.id,
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  albums: Album[];
  @Input()
  selectedAlbum: Album;

  constructor(private spotifyService: SpotifyService, ) { }

  ngOnInit() {
    this.spotifyService.getAlbums().then(albums => this.albums = albums);

  }

  onSelect(album: Album): void {
    console.log(album.id);
  }

}
