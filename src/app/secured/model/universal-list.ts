export interface UniversalList {
    id: any;
    type: 'default' | 'shopping' | 'birthday';
    name: string;
    listItems: UniversalListItem[];
}

export interface UniversalListItem {
    text: string;
}
