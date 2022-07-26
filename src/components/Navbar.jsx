import { ReactComponent as Menu } from "../images/icon-menu.svg";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
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
    <nav className="flex items-center bg-white h-16 w-full z-50 lg:h-32">
      {/* mobile menu */}
      <div
        className="lg:hidden mx-5 my-4 cursor-pointer"
        onClick={props.toggleMenu}
      >
        <Menu className="hover:fill-orange" />
      </div>

      {/* Brand Name */}
      <div className="text-3xl pb-1 text-zinc-800 font-bold font-kumhb w-1/2 lg:text-4xl lg:ml-20 lg:flex">
        sneakers
        {/* Desktop Nav */}
        <div className="hidden lg:flex text-2xl items-center ml-14 text-gray font-thin">
          <ul className="lg:flex lg:gap-7">
            <li className="inline">Collections</li>
            <li className="inline">Men</li>
            <li className="inline">Women</li>
            <li className="inline">About</li>
            <li className="inline">Contact</li>
          </ul>
        </div>
      </div>

      {/* Cart Icon */}
      <div
        className="relative w-1/2 flex justify-end mr-5"
        onClick={props.toggleCart}
      >
        <Cart className="fill-slate-500 cursor-pointer hover:fill-orange" />
        {isCartEmpty ? null : (
          <div className="absolute w-4 h-3 bg-orange rounded bottom-3 -right-1 text-white font-bold text-xs flex justify-center items-center animate-cartBounce">
            {shoppingList.quantity}
          </div>
        )}
      </div>

      <div className="scale-50 mr-5 cursor-pointer">
        <img src={Avatar} alt="Profile Avatar" />
      </div>
    </nav>
  );
}

export default Navbar;
