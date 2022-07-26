import { ReactComponent as Menu } from "../images/icon-menu.svg";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import React, { useEffect, useState } from "react";

function Navbar(props) {
  const [isCartEmpty, setisCartEmpty] = useState(true);
  useEffect(() => {
    if (props.cartItems.quantity === undefined) {
      setisCartEmpty(true);
    } else if (props.cartItems.quantity === 0) {
      setisCartEmpty(true);
    } else {
      setisCartEmpty(false);
    }
  }, [props.cartItems.quantity]);

  return (
    <nav className="flex items-center bg-white h-16 w-full z-50">
      <div className="mx-5 my-4 cursor-pointer" onClick={props.menu}>
        <Menu />
      </div>
      <div className="text-3xl pb-1 text-zinc-800 font-bold font-kumhb w-1/2">
        sneakers
      </div>
      <div
        className="relative w-1/2 flex justify-end mr-5"
        onClick={props.cart}
      >
        <Cart className="fill-slate-500 cursor-pointer hover:fill-orange" />
        {isCartEmpty ? null : (
          <div className="absolute w-4 h-3 bg-orange rounded bottom-3 -right-1 text-white font-bold text-xs flex justify-center items-center">
            {props.cartItems.quantity}
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
