import { loadProduct } from "../store/reducers/productReducer"

export const getProduct = (id) => {
    return dispatch => {
        fetch(`https://garden-project-backend.onrender.com/products/${id}`)
        .then( resp => resp.json())
        .then( json => dispatch(loadProduct(json[0])))
    }
}
