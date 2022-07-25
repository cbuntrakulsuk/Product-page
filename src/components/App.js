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
  const [opencart, setOpencart] = useState(false); //open cart state
  const [shoppingcart, setShoppingcart] = useState([]); //shopping cart

  function toggleMenu() {
    setMenu((prevMenu) => !prevMenu);
  }

  function toggleCart() {
    setOpencart((prevCart) => !prevCart);
  }

  function addtoCart(title, price, quantity) {
    //expand to allow more than one item in the array
    setShoppingcart({
      product: title,
      price: price,
      quantity: quantity,
    });
  }

  return (
    <div className="App">
      <Navbar menu={toggleMenu} cart={toggleCart} />
      <div
        className={
          opencart
            ? "z-40 absolute top-20 left-0 w-full transition-all duration-300 ease-in-out"
            : "absolute -top-96 opacity-0"
        }
      >
        <Cart items={shoppingcart} />
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
      <Desc
        addtoCart={addtoCart}
        title="Autumn Limited Edition Sneakers"
        price="125.00"
      />
    </div>
  );
}

export default App;
