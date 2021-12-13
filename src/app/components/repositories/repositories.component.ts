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

  constructor(private repoService: RepositoryService) { }

  ngOnInit(): void {
    this.repoService
      .getReposByName()
      .subscribe((repos) => this.repos = repos.items)
  }
}
