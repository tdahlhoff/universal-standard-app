import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { UniversalListState } from '../../store/universal-list/universal-list.state';
import { Observable } from 'rxjs';
import { UniversalList, UniversalListItem } from '../../model/universal-list';

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

    addNewList() {
        console.warn('At this point we want to show the form to add a new list.');
    }

    deleteList(universalList: UniversalList) {
        console.warn('At this point we want to delete the list.', universalList);
    }

    getFirstListItems(listItems: UniversalListItem[]): UniversalListItem[] {
        const reducedListItems = listItems.slice(0, 3);
        if (listItems.length > 3) {
            reducedListItems.push({ text: '...' });
        }
        while (reducedListItems.length < 4) {
            reducedListItems.push({ text: '' });
        }
        return reducedListItems;
    }

    showList(universalList: UniversalList) {
        console.warn('At this point we want to show list for editing.', universalList);
    }
}
