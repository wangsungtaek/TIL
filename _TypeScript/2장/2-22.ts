export class SearchAction {
    actionType = 'SEARCH';
    constructor(readonly payload: { searchQuery: string }) {

    }
}

export class SearchSuccessAction {[1]
    actionType = 'SEARCH_SUCCESS';
    constructor(public payload: { searchResults: string[] }) {
        
    }
}

export class SearchFailedAction {
    actionType = 'SEARCH_FAILED';
}

export type SearchActions = SearchAction | SearchSuccessAction | SearchFailedAction;
