import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import DiscountVaucher from '../../components/DiscountVaucher'
import SaleBanner from '../../components/SaleBanner'

export default function MainPage() {

  return (
    <div>
        <SaleBanner />
        <CategoriesContainer limit={4} />
        <DiscountVaucher />
    </div>
  )
}
