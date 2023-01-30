import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCategories } from '../../requests/categories_req'
import CategoryCard from '../CategoryCard';
import s from './index.module.css'

export default function CategoriesContainer() {

    const dispatch = useDispatch();

    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getCategories)
    }, [])
   

  return (
    <section className={s.categories_block}>
          <div className='wrapper'>
            <div className={s.categories_info}>
                <p className={s.categories_title}>Categories</p>
                <button className={s.categories_btn}>All categories</button>
            </div>
            <div className={s.categories_container}>
                {
                    categories.map((el) => <CategoryCard key={el.id} {...el}/>).slice(0,4)
                }
            </div>
        </div>
    </section>
  
  )
}
