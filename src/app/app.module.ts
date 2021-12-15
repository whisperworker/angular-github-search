import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SearchRepoComponent} from './components/search-repo/search-repo.component';
import {RepositoriesComponent} from './components/repositories/repositories.component';
import {RepoItemComponent} from './components/repo-item/repo-item.component';
import {LoaderComponent} from './components/loader/loader.component';
import {RepoFiltersComponent} from './components/repo-filters/repo-filters.component';
import {RepoPageComponent} from './components/repo-page/repo-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: RepositoriesComponent},
  {path: `info`, component: RepoPageComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchRepoComponent,
    RepositoriesComponent,
    RepoItemComponent,
    LoaderComponent,
    RepoFiltersComponent,
    RepoPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
