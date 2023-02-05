import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import { getAllProducts } from '../../requests/all_products_req'
import s from './index.module.css'

export default function ProductsContainer() {

    const dispatch = useDispatch();

    const products = useSelector( state => state.allProducts);

    useEffect(() => {dispatch(getAllProducts)}, []);
    
return (
    <section className={s.products_section}>
        <div className='wrapper'>
            <h2 className={s.products_title}>All Products</h2>
            <div className={s.products_container}>
                {
                    products.map(el => <ProductCard key={el.id} {...el}/>)
                }
            </div>
        </div>
    </section>
   
  )
}








