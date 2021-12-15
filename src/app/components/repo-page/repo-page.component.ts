import {Component, Input, OnInit} from '@angular/core';
import {RepositoryService} from "../../services/repository.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-repo-page',
  templateUrl: './repo-page.component.html',
  styleUrls: ['./repo-page.component.css']
})
export class RepoPageComponent implements OnInit {
  @Input() repository: any;
  @Input() contributors: any;

  constructor(private repositoryService: RepositoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      this.repositoryService.getRepository(params.user, params.repository)
        .subscribe(repo => {
          this.repository = repo;
        });
      this.repositoryService.getContributors(params.user, params.repository)
        .subscribe(contributors => {
          this.contributors = contributors;
        });
    });


  }



}
