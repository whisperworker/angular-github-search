import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchRepoComponent } from './components/search-repo/search-repo.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { RepoItemComponent } from './components/repo-item/repo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchRepoComponent,
    RepositoriesComponent,
    RepoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
