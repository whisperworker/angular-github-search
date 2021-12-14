import {Component, OnInit} from '@angular/core';
import {RepositoryService} from "../../services/repository.service";

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {
  searchQuery: string;
  searchedRepos: Object[];
  loading: boolean = false;
  timer: number;

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
  }

  sendData(value: any) {
    clearTimeout(this.timer);
    this.loading = true;
    this.timer = setTimeout(() => {
      let query: string = value;
      this.repositoryService.
      getReposByName(query.trim()).subscribe(repos => {
        this.searchedRepos = repos.items;
        this.loading = false;
      })
    }, 1000)
  }



}
