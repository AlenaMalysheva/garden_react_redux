import { loadProductsByCategory } from "../store/reducers/productsByCategoryReducer" 

export const getProductsByCategory = ( categoryId ) => {
    return dispatch => {
        fetch(`https://garden-project-backend.onrender.com/categories/${categoryId}`)
        .then( resp => resp.json())
        .then( json =>  dispatch(loadProductsByCategory(json))) 
    }
}
