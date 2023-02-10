import { loadProduct } from "../store/reducers/productReducer"

export const getProduct = (id) => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${id}`)
        .then( resp => resp.json())
        .then( json => dispatch(loadProduct(json[0])))
    }
}
