const defaultState = [];

const LOAD_SALE_PRODUCTS = 'LOAD_ALL_PRODUCTS';

export const loadSaleProducts = payload => ({ type: LOAD_SALE_PRODUCTS, payload });

export const saleProductsReducer = ( state = defaultState, action ) => {
    switch(action.type) {
        case LOAD_SALE_PRODUCTS :
            return action.payload
        default:
            return state
    }
}