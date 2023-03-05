import { loadSaleProducts } from "../store/reducers/saleProductsReducer"

export const getAllProducts = (dispatch) => {
    fetch('https://garden-project-backend.onrender.com/products/all')
    .then( resp => resp.json())
    .then( json => dispatch(loadSaleProducts(json)))
}


// Обратите внимание, что теперь getAllProducts
//  возвращает функцию, которая принимает dispatch
//   в качестве аргумента. Внутри этой функции происходит
//    асинхронный запрос на сервер с помощью fetchAllProducts,
//     который возвращает промис. Когда промис выполнится,
//      будет вызван dispatch с action объектом, созданным
//       с помощью loadAllProducts. Если произойдет ошибка при
//  выполнении запроса, будет выведено сообщение об ошибке в консоль.