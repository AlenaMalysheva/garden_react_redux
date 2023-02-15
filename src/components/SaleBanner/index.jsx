import React from 'react'
import s from './index.module.css'
import img from '../../media/g.png'
import Button from '../Button'

export default function SaleBanner() {
  return (
    <section className={s.sale_container} id='coupon'>
        <div className={['wrapper',s.sale_info].join(' ')}>
            <h1 className={s.sale_title}><span className={s.accent}>Sale</span>start of a new season</h1>
            <Button className={s.sale_btn}>Sale</Button> 
            <Button className={s.details_btn}>More</Button> 
        </div>
        <img src={img} alt="img_discount" className={s.sale_img}/>  
    </section>
  )
}
