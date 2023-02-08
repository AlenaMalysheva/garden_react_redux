import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer'
import { allProductsReducer } from './reducers/allProductsReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { productReducer } from './reducers/productReducer';

const rootReducer = combineReducers({
    categories : categoriesReducer,
    allProducts: allProductsReducer,
    prodsByCategory: productsByCategoryReducer,
    product: productReducer,
});

export const store = createStore(rootReducer,applyMiddleware(thunk))