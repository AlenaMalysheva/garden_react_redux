import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function CategoryCard({ id, title, image }) {

  return (
    <Link  to={`/categories/${id}`} className={[ s.category_card ].join(' ')}>
      <img src={`https://garden-project-backend.onrender.com${image}`} alt="category" className={ s.category_img } />
      <p className={ s.category_title }>{ title }</p>
    </Link>
  )
}
