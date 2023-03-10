import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer'
import { saleProductsReducer } from './reducers/saleProductsReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { categoryReducer } from './reducers/categoryReducer';
// import { wishListReducer } from './reducers/wishListReducer';


const rootReducer = combineReducers({
    categories : categoriesReducer,
    category : categoryReducer,
    saleProducts: saleProductsReducer,
    prodsByCategory: productsByCategoryReducer,
    product: productReducer,
    cart: cartReducer
    
    // wishList: wishListReducer
});


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const persistedReducer = persistReducer( persistConfig, rootReducer );

export const store = createStore(persistedReducer,applyMiddleware(thunk));

export const persistor = persistStore(store);