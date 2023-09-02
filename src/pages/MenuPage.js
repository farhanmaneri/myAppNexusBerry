import React, { useState } from 'react'
import Products from '../components/Products'
import CatButtons from '../components/CatButtons'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MenuPage() {
  const [cartCounter, setCartCounter] = useState(0);

  const increment = () => {
    setCartCounter(cartCounter + 1);
  }

  return (
    <div className='container-fluid  bg-black'>
      <Header cartCounter={cartCounter}/>
      <CatButtons />
      <Products increment={increment}/>
      <Footer />
    </div>
  )
}
