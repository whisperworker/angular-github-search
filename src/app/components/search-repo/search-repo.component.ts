import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {RepositoryService} from "../../services/repository.service";

@Component({
    selector: 'app-search-repo',
    templateUrl: './search-repo.component.html',
    styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {
    @Output() queryData = new EventEmitter<Object[]>();
    @Output() loading = new EventEmitter<boolean>();
    searchQuery: string;
    searchedRepos: Object[];
    timer: number;

    constructor(private repositoryService: RepositoryService) {
    }

    ngOnInit(): void {
    }


    sendData(value: any) {
        clearTimeout(this.timer);
        this.loading.emit(true);
        this.timer = setTimeout(() => {
            let query: string = value;
            this.repositoryService.getReposByName(query.trim())
                .subscribe(repos => {
                    this.searchedRepos = repos.items;
                    this.queryData.emit(this.searchedRepos)
                    this.loading.emit(false);
                })
        }, 1000)
    }


}
