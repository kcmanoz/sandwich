
import React from 'react';
import './style.css'
import Items from './Items'
import Menu from './Menu'

const Product = ({ onOrderClick }) => (
  <Menu data={Items} onOrderClick={onOrderClick} />
);

export default Product;
