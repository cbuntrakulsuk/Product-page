import Product from "./Product";
import React, { useEffect, useState } from "react";

function Cart(props) {
  const [cartisEmpty, setcartisEmpty] = useState();

  useEffect(() => {
    if (props.items.product === undefined) {
      setcartisEmpty(true);
    } else {
      setcartisEmpty(false);
    }
  }, [props.items.product]);

  return (
    <div className=" bg-white mt-3 rounded-md font-bold p-5 mx-5">
      Cart
      <hr className="mt-6 text-zinc-300"></hr>
      {cartisEmpty ? (
        <div className="text-center my-10 text-gray"> Your cart is empty</div>
      ) : (
        <Product
          title={props.items.product}
          price={props.items.price}
          quantity={props.items.quantity}
          deleteItem={props.deleteItem}
        />
      )}
      {cartisEmpty ? (
        ""
      ) : (
        <div className="mt-6 m-auto text-center bg-orange rounded-md h-12 flex items-center justify-center font-bold text-white">
          Checkout
        </div>
      )}
    </div>
  );
}

export default Cart;
