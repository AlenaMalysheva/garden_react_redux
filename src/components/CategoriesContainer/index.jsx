import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCategories } from '../../requests/categories_req'
import CategoryCard from '../CategoryCard'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function CategoriesContainer({limit,showButton = true}) {

    const dispatch = useDispatch();

    const categories = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getCategories)
    }, [])

    const limitedArray = categories.slice(0, limit);

    
    return (
        <section className={s.categories_block}>
            <div className='wrapper'>
                <div className={s.categories_info}>
                    <p className={s.categories_title}>Categories</p>
                    {
                        showButton && (
                            <Link to='/categories'>
                            <button className={s.categories_btn}>All categories</button>
                        </Link>
                        )
                    }
                    
                </div>
                <div className={s.categories_container}>
                    {
                        limitedArray.map((category) => <CategoryCard key={category.id} {...category}/>)  
                    }
                </div>
            </div>
        </section>
  )
}
