const defaultState = {};

const LOAD_PRODUCT_DESCR = 'LOAD_PRODUCT_DESCR';

export const loadProduct = payload => ({ type: LOAD_PRODUCT_DESCR, payload });

export const productReducer = ( state = defaultState, action ) => {
    if( action.type === LOAD_PRODUCT_DESCR ) {
        return action.payload
    } else {
        return state
    }
}
