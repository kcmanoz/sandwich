import React, {useState} from 'react'
import './style.css'


const Navbar = () => {
    const [ordersSideBar, setOrdersSideBar] = useState(false)
    
    const showSideBar = () => {
        setOrdersSideBar(!ordersSideBar)
    }
  
      return (
        <div className='navbar'>
          <span className='nav-title'>Sandwich House</span>
          <span className='order-btn'>Orders</span>
        </div>
      )
}

export default Navbar;
