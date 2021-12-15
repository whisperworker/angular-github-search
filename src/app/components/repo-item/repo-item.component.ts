import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";
import {RepositoryService} from "../../services/repository.service";


@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.css']
})
export class RepoItemComponent implements OnInit {
  @Input() repository: any;
  @Input() showLanguage: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    if (this.repository.language) {
      this.showLanguage = true
    }
  }

}
