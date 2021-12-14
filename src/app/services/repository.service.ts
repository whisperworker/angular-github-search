import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers:new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private apiUrl = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) { }

  getReposByName(searchQuery: string = "stars:>1"):Observable<any> {
    if(!searchQuery) {
      searchQuery = "stars:>1";
    }
    return this.http.get<any>(this.apiUrl, {
      params: new HttpParams()
        .set(`q`, searchQuery)
    })
  }

  getReposByStars() {
    return this.http.get<any>(this.apiUrl, {
      params: new HttpParams()
        .set(`q`, "stars:>1")
    })
  }

  getReposByLanguage(language: string) {
    return this.http.get<any>(this.apiUrl, {
      params: new HttpParams()
        .set(`q`, `language:${language}`)
    })
  }
}
