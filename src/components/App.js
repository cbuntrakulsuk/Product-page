import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Desc from "./Desc";
import Menu from "./Menu";
import Cart from "./Cart";
import React, { useState } from "react";
// import { motion } from "framer-motion";

function App() {
  const [menu, setMenu] = useState(false); //mobile menu state
  const [cart, setCart] = useState(false); //shopping cart state

  function toggleMenu() {
    setMenu((prevMenu) => !prevMenu);
  }

  function toggleCart() {
    setCart((prevCart) => !prevCart);
  }

  return (
    <div className="App">
      <Navbar menu={toggleMenu} cart={toggleCart} />

      <div
        className={
          cart
            ? "z-40 absolute top-20 left-0 w-full transition-all duration-300 ease-in-out"
            : "absolute -top-96 opacity-0"
        }
      >
        <Cart />
      </div>

      <div
        className={
          menu
            ? "translate-x-0 z-50 duration-300 absolute top-0 bg-white h-screen w-2/5 pl-4 pt-8 ease-in-out"
            : "absolute top-0 translate-y-7 translate-x-[-100%] z-50 duration-300 h-screen"
        }
      >
        <Menu closeMenu={toggleMenu} />
      </div>
      <Hero />
      <Desc />
    </div>
  );
}

export default App;

//commit "add slide transitions to cart and mobile menu"
