const defaultstate = [];

const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = payload => ({type: ADD_TO_CART, payload})

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
    }
    return state
}

