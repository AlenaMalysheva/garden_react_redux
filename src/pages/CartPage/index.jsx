import React , { useState} from 'react'
import CartItem from '../../components/CartItem'
import { useSelector,useDispatch } from 'react-redux'
import {GiShoppingCart} from 'react-icons/gi'
import s from './index.module.css'
import {RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { clearCart } from '../../store/reducers/cartReducer'
import Form from '../../components/Form'

export default function CartPage() {

  const cart = useSelector(state => state.cart);

  const [ submitted , setSubmitted ] = useState(false);

  const onSubmitCartForm = (data) => {
    console.log('client number' ,data.number);
    console.log('cart state' ,cart)
    setSubmitted(true);
    dispatch(clearCart())
  }

  const total = cart.reduce((total,el) => total + el.discont_price * el.count, 0)

  const dispatch = useDispatch();

  const clear_cart = () => dispatch(clearCart())

  return (
  
    <section className={s.cart_page}>
      {
        submitted 
          ? <div className={s.success_message}>
              <h2>Order successfully completed</h2>
              <p>The manager will contact you shortly</p>
              <Link to='/categories'>
                <button>back to the store</button>
              </Link>
             
            </div>
          : <div className='wrapper'>
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
                      <Form 
                        buttonText='Order'
                        formStyles={s.cart_form}
                        inputStyles={s.cart_form_input}
                        errorStyles={s.errors_message}
                        formBtnStyles={s.cart_form_btn}
                        onSubmit={onSubmitCartForm}
                      />
                      <button className={s.clear_btn} onClick={clear_cart}>Clear cart</button> 
                    </div>
                  </div>
                }
            </div>
      }
    </section>
  )}   


