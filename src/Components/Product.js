import React, { useState } from 'react'
import './style.css'
import Items from './ItemsData'
import Menu from './Menu'

const Product = () => {
    const [itemsData, setItemsData] = useState(Items);

  return (
    <>
    <Menu data ={itemsData} />
    </>
  )
}

export default Product
