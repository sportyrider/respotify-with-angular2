import { Component, OnChanges, OnDestroy, Input } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';
import { Track } from '../model/track';
import { Album } from '../model/album';


@Component({
  moduleId: module.id,
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnChanges {

  @Input()
  selectedAlbum: Album;

  audio: any;
  tracks: any[] = [];
  selectedTrack: Track;

  constructor(private spotifyService: SpotifyService, ) { }

  ngOnChanges() {

    if (this.selectedAlbum) {
      this.spotifyService.getAlbumTracks(this.selectedAlbum.id).then(track => this.tracks = track);

      // for (var item of this.tracks) {
      //    console.log(item.name +' | '+ item.id ); 
      // } 
    }


  }

  onSelect(track: Track): void {
    this.selectedTrack = track;

    if (this.audio) {
      this.audio.pause();
    } else {
      this.audio = new Audio();
    }

    this.audio.src = track.preview_url;
    this.audio.load();
    this.audio.play();

  }

  ngOnDestroy() {
    this.audio = null;
    this.tracks = null;
  }

}
