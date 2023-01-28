import React from 'react'
import Nav from '../Nav'
import logo from '../../media/logo.png'
import s from './index.module.css'


    export default function Header() {
        return (
        <section className={s.container}>
        <div className={['wrapper', s.header].join(' ')}>
            <div className={s.container_logo_btn}>
                <img src={logo} alt="logo" />
                <button>Catalog</button>
            </div>
            <Nav />
        </div>
        </section>
    
    )
}
