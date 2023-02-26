import React, { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../../requests/products_by_category_req';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';
import s from './index.module.css'
import { sortProducts, searchProducts , productsOnSale } from '../../store/reducers/productsByCategoryReducer';
import { getCategory } from '../../requests/category'

export default function ProdsCategoryContainer() {

    const  dispatch = useDispatch();

    const { categoryId } = useParams();

    const prodsBycategory = useSelector(state => state.prodsByCategory)

    const category = useSelector( state => state.category)

    useEffect(() => {
        dispatch(getCategory(categoryId))
        dispatch(getProductsByCategory(categoryId))
    }, [])

    const sort_product = ( event ) => {
        dispatch(sortProducts(event.target.value))
    } 
    
    // поиск от min к max без применения button, возможно введение или min или max
    const [ minPrice, setMinPrice ] = useState('');
    const [ maxPrice, setMaxPrice ] = useState('');
   
    const search_products = event => {
        event.preventDefault();
        const { min , max } = event.target;
        const min_value = min.value || 0;
        const max_value = max.value || Infinity;
       
        if (min_value !== '' && max_value !== ''){
            dispatch(searchProducts({ min_value, max_value }));
        }
        if (min_value) {
            dispatch(searchProducts({ min_value }));
        } 
        if (max_value) {
            dispatch(searchProducts({ max_value }));
        }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => { // для задержки,чтобы была возможность ввести оба значения
          if (minPrice || maxPrice) {
            dispatch(searchProducts({ min_value: minPrice || 0 , max_value: maxPrice || Infinity }))
            }
        }, 500);
        return () => clearTimeout(timeoutId);
      }, [ minPrice, maxPrice ]);

    // фильтрация по наличию цены со скидкой

    const [onSale, setOnSale] = useState(false);

    useEffect(() => {
        dispatch(productsOnSale(onSale))
    } , [ onSale ])

    return (
    <section className={s.products_section}>
        <div className='wrapper'>
            <h2>{category.title}</h2>
            <div className={s.sorting}>
                <div>
                    <span className={s.form_title}>Price</span>
                    <form className={s.search_form} onSubmit={search_products}>
                        <input 
                            type="number" 
                            placeholder='from' 
                            name='min'  
                            min='0' 
                            value={minPrice} 
                            onChange={(event) => setMinPrice(event.target.value)}
                        />
                        <input 
                            type="number" 
                            placeholder='to' 
                            name='max'  
                            min='0' 
                            value={maxPrice} 
                            onChange={(event) => setMaxPrice(event.target.value)}
                        />
                    </form>
                </div>
                <label htmlFor="discountCheckbox" className={s.label_discount}>Discounted items</label>
                <input 
                        type="checkbox" 
                        id="discountCheckbox" 
                        checked={onSale} 
                        onChange={() => setOnSale(!onSale)}
                />
                <div>
                    <span className={s.form_title}>Sorted </span>
                        <select className={s.sort_select} onInput={sort_product}>
                            <option value='default'>by default</option>
                            <option value='title'>by title</option>
                            <option value='price'> by price</option>
                        </select>
                </div>
            </div>
            <div className={s.products_container}>
                {
                    prodsBycategory
                    .filter((el) => !el.hide_elem)
                    .map((el) => (
                        <ProductCard key={el.id} {...el} />))
                }
            </div>
        </div>
    </section>
  )
}
