import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import './Components/style.css';
import Product from './Components/Product';
import Items from './Components/Items';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import Find from './Components/Find';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [orders, setOrders] = useState([]);

  const handleOrderClick = (item) => {
    setOrders([...orders, item]);
  }

  const cancelOrders = () => {
    setOrders([]); // set orders back to the initial state
  }

  return (
    <Router>
      <Navbar orders={orders} cancelOrders={cancelOrders} />
      <Routes>
        <Route path="/" element={<Product data={Items} onOrderClick={handleOrderClick} />} /> />
        <Route path="/menu" element={<Menu />} />
        <Route path="/find" element={<Find />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
