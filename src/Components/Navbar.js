import React, {useState} from 'react'

const Navbar = (props) => {
  const {setSideMenuOpen, sideMenuOpen} = props;
  
      return (
        <div className='navbar'>
          <span className='nav-title'>Sandwich House</span>
          <span className='order-btn' onClick={() => setSideMenuOpen(!sideMenuOpen)}>Orders</span>
        </div>
      )
}

export default Navbar;
