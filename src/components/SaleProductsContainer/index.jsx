import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import { getAllProducts } from '../../requests/all_products_req'
import s from './index.module.css'

export default function SaleProductsContainer() {

  const dispatch = useDispatch();

  const products = useSelector( state => state.allProducts);

  useEffect(() => {dispatch(getAllProducts)}, []);
    
  const getRandItemsFn = (products, limiter = 3) => {
        const randSales = []
        
        const productsCount = products.length;

        products.forEach(() => {
          if (randSales.length >= limiter) {
            return;
          }
          randSales.push(products[Math.floor(Math.random() * productsCount)])
        })

        return randSales
    }

    const randSales = getRandItemsFn(products, 3)

return (
    <section className={s.sale_block}>
      <div className='wrapper'>
        <h2 className={s.sale_title}>Sale</h2>
        <div className={s.products_container}>
          {
            randSales.map(el => <ProductCard key={el.id} {...el}/>)
          }
        </div>
      </div>
    </section>
  )
}
