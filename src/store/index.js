import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer'
import { allProductsReducer } from './reducers/allProductsReducer';

const rootReducer = combineReducers({
    categories : categoriesReducer,
    allProducts: allProductsReducer
});

export const store = createStore(rootReducer,applyMiddleware(thunk))