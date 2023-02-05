import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../../requests/products_by_category_req';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';
import s from './index.module.css'

export default function ProdsCategoryContainer() {

    const  dispatch = useDispatch();

    const { category } = useParams();

    const prodsBycategory = useSelector(state => state.prodsByCategory)

    useEffect(() => {
        dispatch(getProductsByCategory(category))
    }, [])


    // const categories = useSelector(state => state.categories)

  return (
    <section className={s.products_section}>
        <div className='wrapper'>
            <p>...</p>
            <div className={s.sorting}>
                <div>
                    <span className={s.form_title}>Price </span>
                    <form className={s.search_form} >
                        <input type="number" placeholder='from' name='min'/>
                        <input type="number" placeholder='to' name='max' />
                        <button>Search</button>
                    </form>
                </div>

                <div>
                    <span className={s.form_title}>Sorted </span>
                        <select className={s.sort_select}>
                            <option value='default'>by default</option>
                            <option value='title'>by title</option>
                            <option value='price'> by price</option>
                        </select>
                </div>
            </div>
            
            <div className={s.products_container}>
                {
                    prodsBycategory.map(el => <ProductCard key={el.id} {...el} />)
                }
            </div>
        </div>
    </section>
  )
}

