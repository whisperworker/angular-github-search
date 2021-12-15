import {Component, Input, OnInit} from '@angular/core';
import {RepositoryService} from "../../services/repository.service";

@Component({
  selector: 'app-repo-filters',
  templateUrl: './repo-filters.component.html',
  styleUrls: ['./repo-filters.component.css']
})
export class RepoFiltersComponent implements OnInit {


  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit(): void {
    return
  }

}
