const defaultState = [];

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export const loadProductsByCategory = payload => ({ type: LOAD_PRODUCTS, payload });

export const productsByCategoryReducer = ( state= defaultState, action ) => {
    if( action.type === LOAD_PRODUCTS ) {
        return action.payload
    } else {
        return state
    }
}