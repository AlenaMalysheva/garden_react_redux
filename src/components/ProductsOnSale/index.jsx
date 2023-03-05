import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ProductCard from '../ProductCard'
import { getAllProducts } from '../../requests/all_products_req'
import s from './index.module.css'

export default function ProductsOnSale() {

    const dispatch = useDispatch();

    const products = useSelector( state => state.saleProducts);

    useEffect(() => {dispatch(getAllProducts)}, []);
    
    const productsOnSale = products.filter(products => products.discont_price !== products.price)

return (
    <section className={s.products_section}>
        <div className='wrapper'>
            <h2 className={s.products_title}>Sale</h2>
            <div className={s.products_container}>
                {
                    productsOnSale.map(el => <ProductCard key={el.id} {...el}/>)
                }
            </div>
        </div>
    </section>
   
  )
}








