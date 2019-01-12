import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './config/favourite.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  { path: 'favourites', component: FavouriteComponent },
  { path: '', component: ConfigComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
