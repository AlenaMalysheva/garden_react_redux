import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import s from './index.module.css'

export default function Layout() {
  return (
    <div>
        <Header />
            <main className={s.outlet}>
                <Outlet />
            </main>
        <Footer />
    </div>
  )
}
