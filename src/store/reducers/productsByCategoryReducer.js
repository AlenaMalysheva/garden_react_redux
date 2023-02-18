const defaultState = [];

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const SEARCH_PRICE = 'SEARCH_PRICE';
const PRODUCTS_ON_SALE = 'PRODUCTS_ON_SALE';

let first_state = [];

export const loadProductsByCategory = payload => ({ type: LOAD_PRODUCTS, payload });
export const sortProducts = payload => ({ type: SORT_PRODUCTS,payload });
export const searchProducts = payload => ({ type: SEARCH_PRICE, payload});
export const productsOnSale = payload => ({ type: PRODUCTS_ON_SALE, payload});

export const productsByCategoryReducer = ( state = defaultState, action ) => {
    switch(action.type) {
        case LOAD_PRODUCTS:
            return first_state = action.payload
        case SORT_PRODUCTS:
            if (action.payload === 'default') {
                return first_state
            }
            if (action.payload === 'title') {
                return [...state].sort(( a, b ) => a[action.payload].localeCompare(b[action.payload]))
            }
            if (action.payload === 'price') {
                return [...state].sort((a, b) => {
                    const discountedA = a.price * (1 - a.discont_price);
                    const discountedB = b.price * (1 - b.discont_price);
                    return discountedB - discountedA;
                });
            }
        case SEARCH_PRICE:
            const { min_value, max_value } = action.payload;
            return state.filter(product => {
                return product.price >= min_value && product.price <= max_value
            })
        case PRODUCTS_ON_SALE:
            let isChecked = action.payload
            if (!isChecked) {
                return first_state
            }
            return state.filter(product => product.discont_price !== product.price)
        default:
            return state
    }
}  












