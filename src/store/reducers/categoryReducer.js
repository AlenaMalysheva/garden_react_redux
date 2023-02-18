const defaultState = {};

const LOAD_CATEGORY_INFO = 'LOAD_CATEGORY_INFO';

export const loadCategoryById = payload => ({ type: LOAD_CATEGORY_INFO, payload });

export const categoryReducer = ( state = defaultState, action ) => {
    if( action.type === LOAD_CATEGORY_INFO ) {
        return action.payload
    } else {
        return state
    }
}