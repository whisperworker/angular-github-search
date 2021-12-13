import {Component, Input, OnInit} from '@angular/core';
import {Repository} from "../../../Repository";

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.css']
})
export class RepoItemComponent implements OnInit {
  @Input() repository: Repository;

  constructor() { }

  ngOnInit(): void {
  }

}
