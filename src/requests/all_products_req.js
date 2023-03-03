import { loadAllProducts } from "../store/reducers/allProductsReducer"

export const getAllProducts = ( dispatch ) => {
    fetch('https://garden-project-backend.onrender.com/products/all')
    .then( resp => resp.json())
    .then( json => dispatch(loadAllProducts(json)))
}
