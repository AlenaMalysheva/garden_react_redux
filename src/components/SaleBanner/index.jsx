import React from 'react'
import s from './index.module.css'
import Button from '../Button'
import { Link } from 'react-router-dom'

export default function SaleBanner() {
  return (
    <section className={s.sale_container} id='coupon'>
        <div className={['wrapper',s.sale_info].join(' ')}>
            <h1 className={s.sale_title}><span className={s.accent}>Sale</span>New season</h1>
            <Link to="products" >
              <Button className={s.sale_btn}>Sale</Button> 
            </Link>
            <Button className={s.details_btn}>Learn more</Button> 
        </div>
    </section>
  )
}
