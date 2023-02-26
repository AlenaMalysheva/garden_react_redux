import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../requests/product';
import { useParams } from 'react-router-dom';
import ProductDescrCard from '../../components/ProductDescrCard';
import s from './index.module.css'

export default function ProductDescrPage() {

const dispatch = useDispatch();

const product = useSelector(state => state.product );

const { id } = useParams();


useEffect(() => {
  dispatch(getProduct(id))
}, [])



  return (
    <div className={s.product_page}>
      <ProductDescrCard {...product} key={product.id}/>
    </div>    
  )
}