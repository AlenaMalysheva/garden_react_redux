import React from 'react'
import s from './index.module.css'
import { BsTrash } from "react-icons/bs"
import { HiOutlineMinus } from "react-icons/hi"
import { HiPlus } from "react-icons/hi"
export default function CartItem({id, image, title, price, discont_price,count}) {
  return (
    <div className={s.cart_item}>
    <img src={`http://127.0.0.1:3333${image}`} alt={title} className={s.cart_item_img}/>
    <div className={s.title_btn}>
      <p>{title}</p>
      <div className={s.cart_btn_count}>
        <button><HiOutlineMinus /></button>
        <p>{count}</p>
        <button><HiPlus /></button>
      </div>
    </div>

    <div className={s.price_block}>
      <p className={s.discont_price}>{discont_price}$</p>
      <p className={s.full_price}>{price}$</p>
    </div>
    <BsTrash className={s.trash_icon}/>
</div>
  )
}








  

