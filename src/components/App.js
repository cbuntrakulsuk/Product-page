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
              ? "z-40 absolute top-20 left-0 transition-all duration-300 ease-in-out flex justify-center w-full"
              : "absolute -top-96 opacity-0"
          }
        >
          <Cart />
        </div>
        <div
          className={
            menu
              ? "translate-x-0 z-50 duration-300 absolute top-0 bg-white h-screen w-2/5 pl-4 pt-8 ease-in-out shadow-xl shadow-black/30"
              : "absolute top-0 translate-y-7 translate-x-[-100%] z-50 duration-300 h-screen"
          }
        >
          <Menu toggleMenu={toggleMenu} />
        </div>
        <div className="lg:flex lg:justify-center lg:items-center lg:max-w-5xl lg:mx-auto">
          <Hero />
          <Desc />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
