import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AlbumComponent } from './album.component';
import { AlbumListComponent } from './album-list.component';
import { AlbumFilterComponent } from './filter.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumListComponent,
    AlbumFilterComponent,
    FilterPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
