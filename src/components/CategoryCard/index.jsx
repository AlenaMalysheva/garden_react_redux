import React from 'react'
import s from './index.module.css'

export default function CategoryCard({title, image}) {
  return (
    <div className={[s.category_card].join(' ')}>
        <img src={`http://127.0.0.1:3333${image}`} alt="category" className={s.category_img} />
        <p className={s.category_title}>{title}</p>
    </div>
  )
}
