import {Component, Input, OnInit} from '@angular/core';
import {RepositoryService} from "../../services/repository.service";


@Component({
  selector: 'app-repo-page',
  templateUrl: './repo-page.component.html',
  styleUrls: ['./repo-page.component.css']
})
export class RepoPageComponent implements OnInit {
  @Input() repository: any;
  @Input() contributors: any;
  repoOwner: string;
  repoName: string;

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.repositoryService.getRepository(this.repoOwner = "whisperworker", this.repoName = "angular-github-search")
      .subscribe(repo => {
        this.repository = repo;
      })
    this.repositoryService.getContributors(this.repoOwner = "whisperworker", this.repoName = "angular-github-search")
      .subscribe(contributors => {
        this.contributors = contributors;
      })

  }



}
