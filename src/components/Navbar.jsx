import { ReactComponent as Menu } from "../images/icon-menu.svg";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import { ReactComponent as Brand } from "../images/logo.svg";

import Avatar from "../images/image-avatar.png";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./ShoppingCartContext";

function Navbar(props) {
  const [shoppingList] = useContext(CartContext);
  const [isCartEmpty, setisCartEmpty] = useState(true);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let sum = 0;
    shoppingList.forEach(function (obj) {
      setTotalQuantity((sum += obj.quantity));
    });
  }, [shoppingList]);

  useEffect(() => {
    if (shoppingList.length === 0) {
      setisCartEmpty(true);
    } else {
      setisCartEmpty(false);
    }
  }, [shoppingList]);

  return (
    <nav className="z-50 flex h-[70px] w-full items-center bg-white lg:mx-auto lg:mb-[90px] lg:h-[112px] lg:w-[1100px] lg:border-b-[1px] lg:border-gray/50 ">
      {/* mobile menu */}
      <div
        className="mx-5 my-4 cursor-pointer lg:hidden"
        onClick={props.toggleMenu}
      >
        <Menu className="fill-slate-600 hover:fill-orange" />
      </div>

      {/* Brand Name */}
      <div className="lg:flex lg:items-center">
        <Brand className="lg:mr-14" />
        {/* Desktop Nav */}
        <div className="font-base hidden items-center text-2xl text-slate-600 lg:flex">
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
        className="relative mr-5 flex w-1/2 justify-end lg:mr-10"
        onClick={props.toggleCart}
      >
        <Cart className="cursor-pointer fill-slate-500 hover:fill-orange lg:scale-125" />
        {isCartEmpty ? null : (
          <div className="absolute bottom-3 -right-2 flex h-4 w-5 animate-cartBounce items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
            {/* {shoppingList.quantity} */}
            {totalQuantity}
          </div>
        )}
      </div>

      {/* Avatar */}
      <div className="mr-5 scale-50 cursor-pointer rounded-full border-4 border-transparent hover:border-orange lg:scale-75">
        <img src={Avatar} alt="Profile Avatar" />
      </div>
    </nav>
  );
}

export default Navbar;
