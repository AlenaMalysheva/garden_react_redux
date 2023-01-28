import React from 'react'
import Nav from '../Nav'
import logo from '../../media/logo.png'
import s from './index.module.css'


    export default function Header() {
        return (
        <div className={s.container}>
        <header className={['wrapper', s.header].join(' ')}>
            <div className={s.container_logo_btn}>
                <img src={logo} alt="logo" />
                <button>Catalog</button>
            </div>
            <Nav />
        </header>
        </div>
    
    )
}
