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
    <div className=" bg-white mt-3 rounded-md font-bold p-5 mx-5 w-[500px] h-64">
      Cart
      <hr className="mt-6 text-zinc-300"></hr>
      {cartisEmpty ? (
        <div className="text-center my-10 text-gray"> Your cart is empty</div>
      ) : (
        <Product
          // title={shoppingList.product}
          // price={shoppingList.price}
          // quantity={shoppingList.quantity}
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
