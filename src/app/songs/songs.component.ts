import { Component, OnChanges, Input } from '@angular/core';
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
  
  tracks: any[] = [];
  
  @Input()
  selectedAlbum: Album;
  
  selectedTrack: Track;

  constructor(private spotifyService: SpotifyService, ) { }

  ngOnChanges() {

    console.log('Find tracks - onChange');

   if (this.selectedAlbum) {
     console.log('Find tracks for '+this.selectedAlbum.id);
     this.spotifyService.getAlbumTracks(this.selectedAlbum.id).then(track => this.tracks = track);

    // for (var item of this.tracks) {
      //    console.log(item.name +' | '+ item.id ); 
      // } 
   }
  

  }

  onSelect(track: Track): void {
    this.selectedTrack = track;
    console.log('Selected track id: '+track.id+' -- '+track.preview_url);

    let audio = new Audio();
    audio.src = track.preview_url;
    audio.load();
    audio.play();

 //   const newAudioObject = new Audio(track.preview_url);
 //   newAudioObject.play();

  }
}
