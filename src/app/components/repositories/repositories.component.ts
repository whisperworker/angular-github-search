import { Component, OnInit } from '@angular/core';
import {Repository} from "../../../Repository";
import {REPOS} from "../../../mock-repos";

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repos: Repository[] = REPOS;

  constructor() { }

  ngOnInit(): void {
  }

}
