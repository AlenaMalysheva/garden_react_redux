import React from 'react'
import CartItem from '../../components/CartItem'
import { useSelector,useDispatch } from 'react-redux'
import {GiShoppingCart} from 'react-icons/gi'
import s from './index.module.css'
import {RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { clearCart } from '../../store/reducers/cartReducer'

export default function CartPage() {

  const cart = useSelector(state => state.cart);

  const total = cart.reduce((total,el) => total + el.discont_price * el.count, 0)

  const dispatch = useDispatch();

  const clear_cart = () => dispatch(clearCart())
    
  return (
  
    <section className={s.cart_page}>
      <div className='wrapper'>
        <div>
          <h2>Shopping cart</h2>
            <div className={s.cart_nav}>
                <p>Home / Cart</p>
              <Link to='/categories' className={s.cart_nav_btn}>
                <p>Back to the store </p>
                <RightOutlined className={s.btn_back}/>
              </Link>
            </div>
        </div>
      {
        cart.length === 0 
        ? <div className={s.cart}>
            <div className={s.cart_empty}>
              <GiShoppingCart className={s.cart_icon}/>
              <p>Cart is empty. Please make your choice</p>
            </div>
          </div>
        :
          <div className={s.cart_content}>
            <div className={s.cart_container}>
              {
                cart.map(el => <CartItem key={el.id} {...el}/>)
              }
            </div>
            <div className={s.form_block}>
              <p className={s.form_title}>Order details</p>
              <div className={s.total_block}>
                <p className={s.total_title}>Total</p>
                <p className={s.total_price}>{total}$</p>
              </div>
              <form className={s.cart_form}>
                <input type="number" placeholder='phone number' name='number'/>
                <button className={s.submit_btn}>Order</button>
                <button className={s.clear_btn} onClick={clear_cart}>Clear cart</button>             
              </form>
            </div>
          </div>
        }
      </div>
    </section>
  )}   
