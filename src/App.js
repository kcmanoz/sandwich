import { useState } from "react";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import SideNav from "./Components/SideNav";
import React from "react";

const App = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <>
      <Navbar setSideMenuOpen={setSideMenuOpen} sideMenuOpen={sideMenuOpen} />
      <SideNav setSideMenuOpen={setSideMenuOpen} sideMenuOpen={sideMenuOpen} />
      <Product />
    </>
  );
};

export default App;
