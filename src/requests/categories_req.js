import { loadCategories } from "../store/reducers/categoriesReducer"

export const getCategories = ( dispatch ) => {
    fetch('https://garden-project-backend.onrender.com/categories/all')
    .then( resp => resp.json())
    .then( json => dispatch(loadCategories(json)))
}