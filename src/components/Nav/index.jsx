import React , { useState } from 'react'
import { GiShoppingCart } from "react-icons/gi"
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useSelector } from 'react-redux'
import { RiMenuAddFill  } from 'react-icons/ri'
import { GrFavorite } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'
import Footer from '../Footer'

export default function Nav() {

  const cart = useSelector(state => state.cart); 

  const cart_count = cart.reduce((total,item) => total + item.count, 0 ) 

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMunuClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={ s.nav_menu_container}>
        <ul className={ menuOpen ? [s.nav_menu, s.active].join(' ') : [s.nav_menu]}>
          <Link 
            to='categories'  
            onClick= {() => setMenuOpen(false)}
          >  
            <li>Categories</li>
          </Link>
          <HashLink 
            smooth to = '/#coupon'
            onClick= {() => setMenuOpen(false)}
          >
            <li>Sale</li>
          </HashLink>
          <HashLink 
            smooth to = '/#discount'
            onClick= {() => setMenuOpen(false)}
          >
            <li>Discount</li>
          </HashLink>
          <HashLink  
            smooth to = '/#contacts'
            onClick={() => setMenuOpen(false)}
          >
            <li>Contact</li>
          </HashLink>
          {
            menuOpen && <Footer showAddressBlock={false} />
          }
        </ul>

        <div className={s.nav_menu_icons}>
          <GrFavorite/>
          <Link to='cart'>
              <div className={s.cart_nav}>
                <GiShoppingCart className={s.cart_icon}/>
                {
                  cart.length !== 0 && <p>{cart_count}</p>  
                }
              </div>
          </Link>
          <div className={s.burger_icon} onClick={handleMunuClick}>
            { menuOpen ? <AiOutlineClose/> : <RiMenuAddFill /> }
          </div>
        </div>
    </nav>
  )
}

