import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer'
import { allProductsReducer } from './reducers/allProductsReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    categories : categoriesReducer,
    allProducts: allProductsReducer,
    prodsByCategory: productsByCategoryReducer,
    product: productReducer,
    cart: cartReducer
});


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
 
}

const persistedReducer = persistReducer( persistConfig, rootReducer );


export const store = createStore(persistedReducer,applyMiddleware(thunk));

export const persistor = persistStore(store);