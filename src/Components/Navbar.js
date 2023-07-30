import React, { useState } from 'react';

const Navbar = ({ orders }) => {
  const [isOpen, setIsOpen] = useState(false);
  const totalPrice = Array.isArray(orders) ? orders.reduce((acc, order) => acc + order.price, 0) : 0;

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='navbar'>
      <span className='nav-title'>Sandwich House</span>
      <div className='orders-container'>
        <button className='total-order-btn' onClick={handleMenuClick}>Total Orders</button>
        {isOpen &&
          <div className='orders-list'>
            <p>Total Items: {orders.length}</p>
            <p>Total Price: {totalPrice.toFixed(2)}€</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar;   
