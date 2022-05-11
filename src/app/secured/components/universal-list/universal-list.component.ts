import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { UniversalListState } from '../../store/universal-list/universal-list.state';
import { Observable } from 'rxjs';
import { UniversalList } from '../../model/universal-list';

@Component({
    selector: 'app-universal-list',
    templateUrl: './universal-list.component.html',
    styleUrls: ['./universal-list.component.scss']
})
export class UniversalListComponent implements OnInit {

    @Select(UniversalListState.getItems) universalList$: Observable<UniversalList[]> | undefined;

    displayedColumns: string[] = ['text'];
    
    constructor() {
    }

    ngOnInit(): void {
    }

}
