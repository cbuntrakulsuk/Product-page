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
    <div className="mx-auto px-5 py-5 lg:mr-40 lg:ml-20 lg:mt-10 lg:px-12">
      <div className="uppercase font-kumhb text-xs text-orange font-bold tracking-wide mb-3">
        Sneaker Company
      </div>
      <div className="text-2xl font-bold">
        Fall Limited Edition <span className="block mb-5">Sneakers</span>
      </div>
      <p className="text-base text-gray font-semibold mb-5">
        These low-profile sneakers are your pefrect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="flex mb-5">
        <div className="text-2xl font-bold w-1/3">$125.00</div>
        <div className="w-1/3 flex items-center">
          <div className="bg-paleOrange text-orange font-bold rounded text-center w-10">
            50%
          </div>
        </div>
        <div className="w-1/3 flex items-center font-bold text-gray decoration-2 line-through decoration-inherit">
          $250.00
        </div>
      </div>

      {/* Quantity Button */}
      <div className="lg:flex gap-4">
        <div className="flex bg-zinc-100 rounded-md mb-4 h-12 lg:w-1/4">
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
          className="flex gap-4 justify-center items-center bg-orange text-white font-bold rounded-lg w-full h-11 hover:opacity-90 lg:w-1/2"
          onClick={sendtoCart}
        >
          <Cart className="fill-slate-50" /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Desc;
