import React from 'react'
import s from './index.module.css'
import { SlSocialInstagram } from 'react-icons/sl'
import { BsWhatsapp } from 'react-icons/bs'

export default function Footer({showAddressBlock = true}) {
    return (
    <footer className={ s.footer } id='contacts'>
        <div className={['wrapper', s.footer_container].join(' ')}>
            <div className={ s.contacts_block }>
                <h2>Contacts</h2>
                <p className={ s.phone }>+49 999 999 99 99</p>
                <div className={ s.social_icons }>
                    <a href="https://www.instagram.com/">
                        <SlSocialInstagram className={ s.insta_icon }/>
                    </a>
                    <a href="https://www.whatsapp.com/">
                        <BsWhatsapp className={ s.whatsApp_icon }/>
                    </a>
                </div>
            </div>
            {
                showAddressBlock && (
                    <div className={s.address_block}>
                        <h2>Adress</h2>
                        <p className={ s.address }>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                        <p className={ s.subtitle }>Working Hours:
                            <span className={ s.accent }>24 hours a day</span>
                        </p>
                    </div>
                )
            }
            
        </div>
    </footer>
  )
}
