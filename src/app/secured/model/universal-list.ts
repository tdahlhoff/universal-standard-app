export interface UniversalList {
    id: any;
    type: 'default' | 'shopping' | 'birthday';
    name: string;
    listItems: UniversalListItem[];
    created: string;
    lastEdited: string;
}

export interface UniversalListItem {
    text: string;
}
