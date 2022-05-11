import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UniversalListActions } from './universal-list.actions';
import { UniversalList } from '../../model/universal-list';

export class UniversalListStateModel {
    public items: UniversalList[] = [];
}

@State<UniversalListStateModel>({
    name: 'universalList',
    defaults: {
        items: [
            {
                id: 'b07b0425-913a-476f-a711-f880480a5fdd',
                type: 'shopping',
                name: 'Einkauf KW 19',
                listItems: [
                    { text: 'Schnitzel' },
                    { text: 'Pommes' }
                ]
            }, {
                id: '7a173f67-813b-4877-9174-fcd29d4ccf03',
                type: 'shopping',
                name: 'Einkauf Nordsee',
                listItems: [
                    { text: 'Kasten Erdinger Alkoholfrei' },
                    { text: '6L Milch' }
                ]
            }/*, {
                id: '7a173f67-813b-4877-9174-fcd29d4ccf03',
                type: 'shopping',
                name: 'Einkauf Nordsee',
                listItems: [
                    { text: 'Kasten Erdinger Alkoholfrei' },
                    { text: '6L Milch' }
                ]
            }, {
                id: '7a173f67-813b-4877-9174-fcd29d4ccf03',
                type: 'shopping',
                name: 'Einkauf Nordsee',
                listItems: [
                    { text: 'Kasten Erdinger Alkoholfrei' },
                    { text: '6L Milch' }
                ]
            }*/
        ]
    }
})
@Injectable()
export class UniversalListState {

    @Selector()
    static getItems(state: UniversalListStateModel) {
        return state.items;
    }

    @Action(UniversalListActions.Add)
    add({ getState, setState }: StateContext<UniversalListStateModel>, { payload }: UniversalListActions.Add) {
        const state = getState();
        setState({ items: [...state.items, payload] });
    }

    @Action(UniversalListActions.FetchAll)
    fetchAll({ getState, setState }: StateContext<UniversalListStateModel>) {
        const state = getState();
        setState({ items: [] });
    }
}
