export namespace UniversalListActions {
    export class Add {
        static readonly type = '[UniversalList] Add';
        constructor(public payload: any) {}
    }

    export class Delete {
        static readonly type = '[UniversalList] Delete';
        constructor(public id: any) {}
    }

    export class Edit {
        static readonly type = '[UniversalList] Edit';
        constructor(public payload: any) {}
    }

    export class FetchAll {
        static readonly type = '[UniversalList] Fetch All';
    }
}
