import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import React, { useState, useContext } from "react";
import { CartContext } from "./ShoppingCartContext";

function Desc() {
  const [quantity, setQuantity] = useState(1);
  const [, setShoppingList] = useContext(CartContext);

  //pull from json later for any random item
  let productName = "Autumn Limted Edition Senakers";
  let price = "125.00";

  function handleQuantity(event) {
    if (event.target.getAttribute("name") === "subtract") {
      if (quantity > 1) {
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
      <div className="mb-3 font-kumhb text-xs font-bold uppercase tracking-wide text-orange lg:pt-3 lg:text-lg">
        Sneaker Company
      </div>
      <div className="text-2xl font-bold lg:text-5xl">
        Fall Limited Edition
        <span className="mb-5 block lg:mb-[50px]">Sneakers</span>
      </div>
      <p className="mb-[40px] text-base font-semibold text-gray lg:text-lg">
        These low-profile sneakers are your pefrect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="mb-[30px] flex lg:w-full lg:flex-wrap lg:gap-4">
        <div className="w-1/3 text-2xl font-bold lg:w-[100px]">$125.00</div>
        <div className="flex w-1/3 items-center lg:w-1/2">
          <div className="w-10 rounded bg-paleOrange text-center font-bold text-orange">
            50%
          </div>
        </div>
        <div className="flex w-1/3 items-center font-bold text-gray line-through decoration-2">
          $250.00
        </div>
      </div>

      {/* Quantity Button */}
      <div className="gap-4 lg:flex">
        <div className="mb-[17px] flex h-[56px] rounded-md bg-zinc-100 lg:w-[158px]">
          <button
            name="subtract"
            className="flex w-1/3 items-center justify-center text-orange"
            onClick={handleQuantity}
          >
            <Minus className="pointer-events-none" />
          </button>
          <div className="flex w-1/3 items-center justify-center font-bold">
            {quantity}
          </div>
          <button
            className="flex w-1/3 items-center justify-center text-orange"
            name="add"
            onClick={handleQuantity}
          >
            <Plus className="pointer-events-none" />
          </button>
        </div>

        {/* Add to cart Button */}
        <button
          className="flex h-[56px] w-full items-center justify-center gap-4 rounded-lg bg-orange font-bold text-white shadow-xl shadow-orange/50 hover:opacity-90 lg:w-[272px]"
          onClick={sendtoCart}
        >
          <Cart className="fill-slate-50" /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Desc;
