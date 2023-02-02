import { loadAllProducts } from "../store/reducers/allProductsReducer"

export const getAllProducts = ( dispatch ) => {
    fetch('http://localhost:3333/products/all')
    .then( resp => resp.json())
    .then( json => dispatch(loadAllProducts(json)))
}
