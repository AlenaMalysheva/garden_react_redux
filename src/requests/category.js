// на бекенде добавила возможность делать запрос на отдельную категорию 
// по ссылке http://localhost:3333/categories/info/1

import { loadCategoryById } from "../store/reducers/categoryReducer"; 

export const getCategory = (id) => {
    return dispatch => {
        fetch(`http://localhost:3333/categories/info/${id}`)
        .then( resp => resp.json())
        .then( json => dispatch(loadCategoryById(json)))
    }
}
