import React from 'react'
import { GiShoppingCart } from "react-icons/gi"
import s from './index.module.css'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Nav() {
  return (
    <div className={s.nav_menu}>
        <Link to='categories'>Categories</Link>
        <AnchorLink href='#coupon'>
          <p>Coupon</p>
        </AnchorLink>
        <AnchorLink href='#discount'>
          <p>Discount</p>
        </AnchorLink>
        <AnchorLink  href='#contacts'>
          <p>Contact</p>
        </AnchorLink>
        <Link to='cart'>
          <GiShoppingCart className={s.cart_icon}/>
        </Link>
    </div>
  )
}

