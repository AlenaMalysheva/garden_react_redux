import React from 'react'
import s from './index.module.css'
import { SlSocialInstagram } from 'react-icons/sl'
import { BsWhatsapp } from 'react-icons/bs'

export default function Footer() {
    return (
    <footer className={ s.footer} id='contacts'>
        <div className={['wrapper', s.footer_container].join(' ')}>
        <div className={s.contacts_block}>
            <h2>Contacts</h2>
            <p className={s.phone}>+7 999 999 99 99</p>
            <div className={s.social_icons}>
                <a href="https://www.instagram.com/">
                    <SlSocialInstagram className={s.insta_icon}/>
                </a>
                <a href="https://www.whatsapp.com/">
                    <BsWhatsapp className={s.whatsApp_icon}/>
                </a>
            </div>
        </div>
        <div>
            <h2>Adress</h2>
            <p className={s.address}><span className={s.accent_city}>Kyiv,</span> Cosmonaftov street, 11</p>
            <p className={s.subtitle}>Work schedule<span className={s.accent}>24/7</span></p>
            </div>
        </div>
    </footer>
  )
}
