import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UniversalListActions } from './universal-list.actions';
import { UniversalList } from '../../model/universal-list';
import { Firestore, getDocs, query, collection, orderBy, limit, where } from '@angular/fire/firestore';
import { from, tap } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';

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
                created: '2022-04-29',
                lastEdited: '2022-05-19 15:32:43',
                listItems: [
                    { text: 'Schnitzel' },
                    { text: 'Pommes' },
                    { text: 'Erbsen & Möhren' },
                    { text: 'Mayo' }
                ],
                roles: {
                    fSo2X3Dx8dedbZiBDy9IOQ11VsQ2: 'owner'
                }
            }, {
                id: '7a173f67-813b-4877-9174-fcd29d4ccf03',
                type: 'shopping',
                name: 'Einkauf Nordsee',
                created: '2022-04-29',
                lastEdited: '2022-05-19 15:32:43',
                listItems: [
                    { text: 'Kasten Erdinger Alkoholfrei' },
                    { text: '6L Milch' },
                    { text: 'Butter' },
                    { text: 'Aufschnitt (4x)' },
                    { text: 'Brot' },
                    { text: '4 Joghurt' },
                    { text: '2 Flaschen Mineralwasser' },
                    { text: 'Spülmittel' }
                ],
                roles: {
                    fSo2X3Dx8dedbZiBDy9IOQ11VsQ2: 'owner'
                }
            }, {
                id: '7a173f67-813b-4877-9174-fcd29d4ccf03',
                type: 'shopping',
                name: 'Einkauf Nordsee',
                created: '2022-04-29',
                lastEdited: '2022-05-19 15:32:43',
                listItems: [
                    { text: 'Kasten Erdinger Alkoholfrei' },
                    { text: '6L Milch' }
                ],
                roles: {
                    fSo2X3Dx8dedbZiBDy9IOQ11VsQ2: 'owner'
                }
            }, {
                id: '7a173f67-813b-4877-9174-fcd29d4ccf03',
                type: 'shopping',
                name: 'Einkauf Nordsee',
                created: '2022-04-29',
                lastEdited: '2022-05-19 15:32:43',
                listItems: [
                    { text: 'Kasten Erdinger Alkoholfrei' },
                    { text: '6L Milch' }
                ],
                roles: {
                    fSo2X3Dx8dedbZiBDy9IOQ11VsQ2: 'owner'
                }
            }
        ]
    }
})
@Injectable()
export class UniversalListState {

    @Selector()
    static getItems(state: UniversalListStateModel) {
        return state.items;
    }

    constructor(private firestore: Firestore, private authService: AuthService) {
    }

    @Action(UniversalListActions.Add)
    add({ getState, setState }: StateContext<UniversalListStateModel>, { payload }: UniversalListActions.Add) {
        const state = getState();
        setState({ items: [...state.items, payload] });
    }

    @Action(UniversalListActions.FetchAll)
    fetchAll({ patchState }: StateContext<UniversalListStateModel>) {
        const q = query(collection(this.firestore, 'universalLists'),
            where('roles.readers', 'array-contains', this.authService.currentUser?.uid),
            orderBy('lastEdited', 'desc'),
            limit(10)
        );
        return from(getDocs(q)).pipe(
            tap((querySnapshot) => {
                const universalLists = querySnapshot.docs.map(doc => {
                    console.warn(doc.data());
                    return doc.data() as unknown as UniversalList
                });
                console.warn(universalLists);
                patchState({ items: universalLists });
            })
        );
    }
}
