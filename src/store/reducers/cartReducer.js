const defaultstate = [];

const ADD_TO_CART = 'ADD_TO_CART';
const CLEAR_CART = 'CLEAR_CART';

export const addToCart = payload => ({type: ADD_TO_CART, payload})
export const clearCart = () => ({ type: CLEAR_CART })

const checkProduct = (state,payload) => {
    const ProductInState = state.find(item => item.id === payload.id);
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
    if(action.type === ADD_TO_CART) {
        return checkProduct( state, action.payload )
    } else if(action.type === CLEAR_CART) {
        return defaultstate
    } else {
        return state
    }
}

