import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import { getAllProducts } from '../../requests/all_products_req'
import s from './index.module.css'

export default function SaleProductsContainer() {

  const dispatch = useDispatch();

  const products = useSelector( state => state.saleProducts);

  useEffect(() => {dispatch(getAllProducts)}, []);
    
  const discountProducts = products.filter(products => products.discont_price !== products.price); // товары со скидкой , сравниваем цену со скидкой и цену без скидки
  
  let actionProducts = [];
  if (discountProducts.length >= 3) {    // если товаро со скидкой > 3
  actionProducts = discountProducts
    .map( el => [el, Math.random()] )   // создаем масив из масивов в котором первый элемент это товар,а второй рандомное число
    .sort( (a,b) => a[1] - b[1] )       // сортируем по рандомному числу
    .map( el => el[0] )                 // возвращаем только товары
    .slice(0,3)                         // берем первые 3 элемента
  } else {
    actionProducts = discountProducts
}

return ( 
    <section className={s.sale_block}>
      <div className='wrapper'>
        <h2 className={s.sale_title}>Sale</h2>
        <div className={s.products_container}>
          {
            actionProducts.map(el => <ProductCard key={el.id} {...el}/>) 
          } 
        </div>
      </div>
    </section>
  )
}
