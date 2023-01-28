import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi"
import s from './index.module.css'

export default function Nav() {
  return (
    <div className={s.nav_menu}>
        <a>Categories</a>
        <a>Coupon</a>
        <a>Discount</a>
        <a>Contact</a>
        <HiOutlineShoppingBag className={s.cart_icon}/>
    </div>
  )
}

