import React from 'react'
import Products from '../components/Products'
import CatButtons from '../components/CatButtons'

export default function MenuPage({increment}) {
  

  return (
<>      
<CatButtons  />
      <Products increment={increment}/>
    </>
  )
}
