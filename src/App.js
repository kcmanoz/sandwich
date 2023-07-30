import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import './Components/style.css';

const App = () => {
  const [orders, setOrders] = useState([]);

  const handleOrderClick = (item) => {
    setOrders([...orders, item]);
  }

  const cancelOrders = () => {
    setOrders([]); // set orders back to the initial state
  }

  return (
    <>
      <Navbar orders={orders} cancelOrders={cancelOrders} />
      <Product onOrderClick={handleOrderClick} />
    </>
  );
};

export default App;
