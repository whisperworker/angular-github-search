import {Component, Input, OnInit} from '@angular/core';
import {Repository} from "../../../Repository";

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.css']
})
export class RepoItemComponent implements OnInit {
  @Input() repository: any;
  @Input() showLanguage: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.repository.language) {
      this.showLanguage = true
    }
  }


}
