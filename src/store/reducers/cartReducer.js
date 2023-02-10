const defaultstate = [];

const ADD_TO_CART = 'ADD_TO_CART';
const CLEAR_CART = 'CLEAR_CART';
const INCREMENT_ITEM = 'INCREMENT_ITEM ';
const DECREMENT_ITEM = 'DECREMENT_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const clearCart = () => ({ type: CLEAR_CART });
export const incrementItem = payload => ({ type: INCREMENT_ITEM, payload });
export const decrementItem = payload => ({ type: DECREMENT_ITEM, payload});
export const removeItem = payload => ({ type: REMOVE_ITEM, payload });

const checkProduct = (state,payload) => {
    const ProductInState = state.find( item => item.id === payload.id );
    if(ProductInState) {
        ProductInState.count++
        return [...state]
    } else {
        return [...state , {
            ...payload,
            count: 1
            }
        ]
    }
}


export const cartReducer = ( state = defaultstate, action ) => {
    if( action.type === ADD_TO_CART ) {
        return checkProduct( state, action.payload )

    } else if(action.type === CLEAR_CART) {
        return defaultstate

    } else if( action.type === INCREMENT_ITEM ) {
        state.find(el => el.id === action.payload).count++
        return [...state]

    } else if(action.type === DECREMENT_ITEM) {
        const target_item = state.find(el => el.id === action.payload);

        target_item.count === 1 
        ? state = state.filter(el => el.id !== action.payload)
        : target_item.count--
        return [...state]

    } else if( action.type === REMOVE_ITEM ) {
        return  state.filter(el => el.id !== action.payload)
      
    } else {
        return state
    } 
} 



