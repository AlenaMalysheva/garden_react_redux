import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/cartReducer'
import { useParams } from 'react-router-dom'
export default function ProductDescrCard({ title, price, discont_price, description, image }) {

    const discont = Math.round(((price - discont_price) / price )* 100)

    const dispatch = useDispatch();

    const { id } = useParams();

    const add_to_cart = () => dispatch(addToCart({id: +id, image, title, price, discont_price}))

  return (
    <div className={s.product_descr_card}>
        <div className='wrapper'>
            <h2>{title}</h2>
            <div className={s.product_card_content}>
                <div className={s.card_img}>
                    <img src={`https://garden-project-backend.onrender.com${image}`} alt={title} />
                </div>
                <div className={s.product_card_info}>
                    {
                        discont_price < price 
                        ?   <div className={s.price_block}>
                                <p className={s.discont_price}>{discont_price}$</p>
                                <p className={s.price}>{price}$</p>
                                <p className={s.discount_percentage}>{discont}%</p>
                            </div>
                        :   <div className={s.price_block}>
                                <p className={s.full_price}>{price}$</p>
                            </div>
                    }
                    <button className={s.product_card_btn} onClick={add_to_cart}>to cart</button>
                    <p className={s.description}>
                        <span>Description</span>
                        {description}
                    </p>  
                </div>
            </div>
        </div>
    </div>
  )
}