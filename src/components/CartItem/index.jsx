import React from 'react'
import s from './index.module.css'
import { BsTrash } from "react-icons/bs"
import { HiOutlineMinus } from "react-icons/hi"
import { HiPlus } from "react-icons/hi"
import { useDispatch } from 'react-redux'
import { incrementItem, decrementItem ,removeItem } from '../../store/reducers/cartReducer'

export default function CartItem({ id, image, title, price, discont_price,count }) {

  const dispatch = useDispatch();

  const increment_item = () => dispatch(incrementItem(id));
  const decrement_item = () => dispatch(decrementItem(id));
  const remove_item = () => dispatch(removeItem(id));

  return (
  <div className={s.cart_item}>
    <img src={`https://garden-project-backend.onrender.com${image}`} alt={title} className={s.cart_item_img}/>
    <div className={s.title_btn}>
      <p>{title}</p>
      <div className={s.cart_btn_count}>
        <button onClick={decrement_item}><HiOutlineMinus /></button>
        <p>{count}</p>
        <button onClick={increment_item}><HiPlus /></button>
      </div>
    </div>

    <div className={s.price_block}>
      <p className={s.discont_price}>{discont_price}$</p>
      <p className={s.full_price}>{price}$</p>
    </div>
    <BsTrash className={s.trash_icon} onClick={remove_item} />
</div>
  )
}








  

