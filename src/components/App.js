import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Desc from "./Desc";
import Menu from "./Menu";
import Cart from "./Cart";
import React, { useState } from "react";
import { CartProvider } from "./ShoppingCartContext";

function App() {
  const [menu, setMenu] = useState(false); //mobile menu state
  const [opencart, setOpencart] = useState(false); //open cart state

  function toggleMenu() {
    setMenu((prevMenu) => !prevMenu);
  }

  function toggleCart() {
    setOpencart((prevCart) => !prevCart);
  }

  return (
    <CartProvider>
      <div className="w-screen">
        <Navbar toggleMenu={toggleMenu} toggleCart={toggleCart} />
        <div
          className={
            opencart
              ? "absolute top-20 left-0 z-40 flex w-full justify-center transition-all duration-300 ease-in-out lg:left-96"
              : "absolute -top-96 opacity-0"
          }
        >
          <Cart />
        </div>
        <div
          className={
            menu
              ? "absolute top-0 z-50 h-screen w-2/5 translate-x-0 bg-white pl-4 pt-8 shadow-xl shadow-black/30 duration-300 ease-in-out"
              : "absolute top-0 z-50 h-screen translate-y-7 translate-x-[-100%] duration-300"
          }
        >
          <Menu toggleMenu={toggleMenu} />
        </div>
        <div className="lg:mx-auto lg:flex lg:max-w-5xl lg:items-center lg:justify-center">
          <Hero />
          <Desc />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
