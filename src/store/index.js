import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer'
import { allProductsReducer } from './reducers/allProductsReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';

const rootReducer = combineReducers({
    categories : categoriesReducer,
    allProducts: allProductsReducer,
    prodsByCategory: productsByCategoryReducer
});

export const store = createStore(rootReducer,applyMiddleware(thunk))