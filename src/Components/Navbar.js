import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const handleCloseOrdersList = () => {
    setIsOpen(false);
  }

  return (
    <nav className='navbar'>

      <span className='navbar-title'>Sandwich House</span>
      <div className="navbar-list">
        <Link to="/" className='navbar-content'>HOME</Link>
        <Link to="/menu" className='navbar-content'>MENU</Link>
        <Link to="/find" className='navbar-content'>FIND A SANDWICH HOUSE</Link>
      </div>

      <div className='orders-container'>
        <span className='total-order' onClick={handleMenuClick}>Orders {totalPrice.toFixed(2)}€</span>
        {isOpen &&
          <div className='orders-list'>
            <button className='close-orders-btn' onClick={handleCloseOrdersList}>✕</button>
            <p>Total Items: {orders.length}</p>
            <p>Total Price: {totalPrice.toFixed(2)}€</p>
            <button className='cancel-orders-btn' onClick={handleCancelOrders}>Cancel Orders</button>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar;
