export type UserRoleType = 'owner' | 'writer' | 'reader';

export interface UniversalList {
    id: any;
    type: 'default' | 'shopping' | 'birthday';
    name: string;
    listItems: UniversalListItem[];
    created: string;
    lastEdited: string;
    roles: { [key: string]: UserRoleType };
}

export interface UniversalListItem {
    text: string;
}
