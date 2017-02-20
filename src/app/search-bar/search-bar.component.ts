import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
   moduleId: module.id,
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  artist: string;


  constructor(  private router: Router) { }

  ngOnInit() {
  }

  search(): void {
    this.router.navigate(['/detail', this.artist]);
  }

}
