import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import './Components/style.css';

const App = () => {
  const [orders, setOrders] = useState([]);

  const handleOrderClick = (item) => {
    setOrders([...orders, item]);
  }

  return (
    <>
      <Navbar orders={orders} />
      <Product onOrderClick={handleOrderClick} />
    </>
  );
};

export default App;
