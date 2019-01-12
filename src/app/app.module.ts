import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // for HTTP tequest
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConfigComponent } from './config/config.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AppRoutingModule } from './app-routing.module';
import { FavouriteComponent } from './config/favourite.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConfigComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
