import React from 'react'
import s from './index.module.css'

export default function ProductDescrCard({ title, price, discont_price, description, image }) {


  const discont = Math.round(((price - discont_price) / price )* 100)

  return (
    <div className={s.product_descr_card}>
        <div className='wrapper'>
            <h2>{title}</h2>
            <div className={s.product_card_content}>
                <div>
                    <img src={`http://127.0.0.1:3333${image}`} alt={title} />
                </div>
                <div className={s.product_card_info}>
                    <div className={s.price_block}>
                        <p className={s.discont_price}>{discont_price}$</p>
                        <p className={s.full_price}>{price}$</p>
                        <p className={s.discount_percentage}>{discont}%</p>
                    </div>
                    <button className={s.product_card_btn}>to cart</button>
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