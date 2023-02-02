import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import DiscountVaucher from '../../components/DiscountVaucher'
import SaleBanner from '../../components/SaleBanner'
import SaleProductsContainer from '../../components/SaleProductsContainer'  

export default function MainPage() {

  return (
    <div>
        <SaleBanner />
        <CategoriesContainer limit={4} />
        <DiscountVaucher />
        <SaleProductsContainer />
    </div>
  )
}
