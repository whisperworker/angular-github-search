import { Component, OnInit } from '@angular/core';
import {RepositoryService} from "../../services/repository.service";
import {Repository} from "../../../Repository";
import {REPOS} from "../../../mock-repos";

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  /*repos: Repository[] = REPOS;*/
  repos: Object[];
  loading: boolean = false;

  constructor(private repoService: RepositoryService) { }

  ngOnInit(): void {
    this.loading = true;
    const getRepos = () => {
      return this.repoService
        .getReposByName()
        .subscribe((repos) => {
          this.repos = repos.items;
          this.loading = false;
        })
    }
    setTimeout(getRepos, 1000)
  }

  onChange(e: any) {
    this.repos = []
  }

}
