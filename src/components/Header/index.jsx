import React from 'react'
import Nav from '../Nav'
import logo from '../../media/logo.png'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import Button from '../Button'

    export default function Header() {
        return (
        <section className={s.container}>
            <div className={['wrapper', s.header].join(' ')}>
                <div className={s.container_logo_btn}>
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <Link to='products'>
                        <button>Catalog</button>
                    </Link>
                </div>
                <Nav />
            </div>
        </section>
    
    )
}
