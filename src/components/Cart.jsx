import Product from "./Product";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./ShoppingCartContext";

function Cart(props) {
  const [cartisEmpty, setcartisEmpty] = useState();
  const [shoppingList] = useContext(CartContext);

  useEffect(() => {
    if (shoppingList.product === undefined) {
      setcartisEmpty(true);
    } else {
      setcartisEmpty(false);
    }
  }, [shoppingList.product]);

  return (
    <div className=" mx-5 mt-3 h-64 w-[500px] rounded-md bg-white p-5 font-bold shadow-xl shadow-black/30 lg:w-96">
      Cart
      <hr className="mt-6 text-zinc-300"></hr>
      {cartisEmpty ? (
        <div className="my-10 text-center text-gray"> Your cart is empty</div>
      ) : (
        <Product deleteItem={props.deleteItem} />
      )}
      {cartisEmpty ? (
        ""
      ) : (
        <div className="m-auto mt-6 flex h-12 items-center justify-center rounded-md bg-orange text-center font-bold text-white">
          Checkout
        </div>
      )}
    </div>
  );
}

export default Cart;
