import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import React, { useState, useContext } from "react";
import { CartContext } from "./ShoppingCartContext";

function Desc(props) {
  const [quantity, setQuantity] = useState(0);
  const [, setShoppingList] = useContext(CartContext);

  //pull from json later for any random item
  let productName = "Autumn Limted Edition Senakers";
  let price = "125.00";

  function handleQuantity(event) {
    if (event.target.getAttribute("name") === "subtract") {
      if (quantity >= 1) {
        setQuantity(quantity - 1);
      }
    } else if (event.target.getAttribute("name") === "add") {
      setQuantity(quantity + 1);
    }
  }

  function sendtoCart() {
    setShoppingList({
      product: productName,
      price: price,
      quantity: quantity,
    });
  }

  return (
    <div className="mx-auto px-5">
      <div className="uppercase font-kumhb text-xs text-orange font-bold tracking-wide mb-3 lg:text-lg lg:pt-3">
        Sneaker Company
      </div>
      <div className="text-2xl font-bold lg:text-5xl">
        Fall Limited Edition
        <span className="block mb-5 lg:mb-[50px]">Sneakers</span>
      </div>
      <p className="text-base text-gray font-semibold mb-[40px] lg:text-lg">
        These low-profile sneakers are your pefrect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="flex mb-[30px] lg:w-full lg:flex-wrap lg:gap-4">
        <div className="text-2xl font-bold w-1/3 lg:w-[100px]">$125.00</div>
        <div className="w-1/3 flex items-center lg:w-1/2">
          <div className="bg-paleOrange text-orange font-bold rounded text-center w-10">
            50%
          </div>
        </div>
        <div className="w-1/3 flex items-center font-bold text-gray decoration-2 line-through">
          $250.00
        </div>
      </div>

      {/* Quantity Button */}
      <div className="lg:flex gap-4">
        <div className="h-[56px] flex bg-zinc-100 rounded-md mb-[17px] lg:w-[158px]">
          <button
            name="subtract"
            className="flex items-center justify-center w-1/3 text-orange"
            onClick={handleQuantity}
          >
            <Minus className="pointer-events-none" />
          </button>
          <div className="flex justify-center items-center w-1/3 font-bold">
            {quantity}
          </div>
          <button
            className="flex justify-center items-center w-1/3 text-orange"
            name="add"
            onClick={handleQuantity}
          >
            <Plus className="pointer-events-none" />
          </button>
        </div>

        {/* Add to cart Button */}
        <button
          className="flex h-[56px] gap-4 justify-center items-center bg-orange text-white font-bold rounded-lg w-full hover:opacity-90 shadow-xl shadow-orange/50 lg:w-[272px]"
          onClick={sendtoCart}
        >
          <Cart className="fill-slate-50" /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Desc;
