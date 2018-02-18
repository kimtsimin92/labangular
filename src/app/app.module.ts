import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { ArticlesService } from './articles.service';


@NgModule({
  declarations: [
    AppComponent,
    ListeArticlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
