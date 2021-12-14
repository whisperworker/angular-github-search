import { Component } from '@angular/core';
import {RepositoriesComponent} from "./components/repositories/repositories.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-github-search';
}
