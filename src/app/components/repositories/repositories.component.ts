import {Component, OnInit} from '@angular/core';
import {RepositoryService} from "../../services/repository.service";


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos: Object[];
  loading: boolean = false;
  isNothingSearched: boolean = false;

  constructor(private repoService: RepositoryService) {
  }

  ngOnInit(): void {
    this.loading = true;
    const getRepos = () => {
      return this.repoService.getReposByName()
        .subscribe((repos) => {
          this.repos = repos.items;
          this.loading = false;
        })
    }
    setTimeout(getRepos, 500)
  }

  receiveQueryData($event: any) {
    this.repos = $event;
    this.isNothingSearched = this.repos.length === 0;
  }

  loadingFromSearch($event: any) {
    this.loading = $event
  }

}
