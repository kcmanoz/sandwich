import React, { useState } from 'react';

const Navbar = ({ orders, cancelOrders }) => {
  const [isOpen, setIsOpen] = useState(false);
  const totalPrice = Array.isArray(orders) ? orders.reduce((acc, order) => acc + order.price, 0) : 0;

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  }

  const handleCancelOrders = () => {
    cancelOrders(); // call the function passed down from the parent
    setIsOpen(false); // close the orders list
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
            <button className='cancel-orders-btn' onClick={handleCancelOrders}>Cancel Orders</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar;   
