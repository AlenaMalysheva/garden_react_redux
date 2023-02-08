import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { addToCart } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux'

export default function ProductCard({id, image, title, price, discont_price, categoryId, count }) {

  const discount = Math.round(((price - discont_price) / price )* 100);

  const dispatch = useDispatch();

  const add_to_cart = () => dispatch(addToCart({id, image, title, price, discont_price,count}))

return (

    <div className={s.sale_product_card}>
      <div>
        <img src={`http://127.0.0.1:3333${image}`} alt={title} className={s.product_img}/>
        <button onClick={add_to_cart}>add to cart</button>
      </div>
      <div className={s.price_block}>
        <p className={s.discont_price}>{discont_price}$</p>
        <p className={s.full_price}>{price}$</p>
        <p className={s.sale_percent}>{discount}%</p>
      </div>
      <Link to={`/categories/${categoryId}/products/${id}`} className={s.sale_product_title}>{title}</Link>
    </div>
  )
}
