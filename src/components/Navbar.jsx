import { ReactComponent as Menu } from "../images/icon-menu.svg";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as Brand } from "../images/logo.svg";

import Avatar from "../images/image-avatar.png";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./ShoppingCartContext";

function Navbar(props) {
  const [shoppingList] = useContext(CartContext);
  const [isCartEmpty, setisCartEmpty] = useState(true);

  useEffect(() => {
    if (shoppingList.quantity === undefined) {
      setisCartEmpty(true);
    } else if (shoppingList.quantity === 0) {
      setisCartEmpty(true);
    } else {
      setisCartEmpty(false);
    }
  }, [shoppingList.quantity]);

  return (
    <nav className="flex items-center bg-white h-[70px] w-full z-50 lg:h-[112px] lg:border-b-[1px] lg:border-gray lg:w-[1100px] lg:mx-auto lg:mb-[90px]">
      {/* mobile menu */}
      <div
        className="lg:hidden mx-5 my-4 cursor-pointer"
        onClick={props.toggleMenu}
      >
        <Menu className="hover:fill-orange fill-slate-600" />
      </div>

      {/* Brand Name */}
      <div className="lg:flex lg:items-center">
        <Brand className="lg:mr-14" />
        {/* Desktop Nav */}
        <div className="hidden lg:flex text-2xl items-center text-slate-600 font-base">
          <ul className="lg:flex lg:gap-9 lg:text-lg">
            <li className="desktop-nav">Collections</li>
            <li className="desktop-nav">Men</li>
            <li className="desktop-nav">Women</li>
            <li className="desktop-nav ">About</li>
            <li className="desktop-nav ">Contact</li>
          </ul>
        </div>
      </div>

      {/* Cart Icon */}
      <div
        className="relative w-1/2 flex justify-end mr-5 lg:mr-10"
        onClick={props.toggleCart}
      >
        <Cart className="fill-slate-500 cursor-pointer hover:fill-orange lg:scale-125" />
        {isCartEmpty ? null : (
          <div className="absolute w-4 h-3 bg-orange rounded bottom-3 -right-1 text-white font-bold text-xs flex justify-center items-center animate-cartBounce">
            {shoppingList.quantity}
          </div>
        )}
      </div>

      <div className="scale-50 mr-5 cursor-pointer lg:scale-75">
        <img src={Avatar} alt="Profile Avatar" />
      </div>
    </nav>
  );
}

export default Navbar;
