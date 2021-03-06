import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumsComponent }   from './albums/albums.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'detail/:artist', component: AlbumsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}