import productImg from "../images/image-product-1-thumbnail.jpg";
import { ReactComponent as Delete } from "../images/icon-delete.svg";
import { CartContext } from "./ShoppingCartContext";

import React, { useContext } from "react";

function Product() {
  const [shoppingList, setShoppingList] = useContext(CartContext);

  //fix delete function
  //map though array and delete by id?
  function deleteItem() {
    if (shoppingList.quantity > 1) {
      setShoppingList({ ...shoppingList, quantity: shoppingList.quantity - 1 });
    } else {
      setShoppingList({});
    }
  }

  return (
    <div>
      {shoppingList.map((item) => {
        let total = item.quantity * item.price;
        return (
          <div className="mt-6 ml-4 grid grid-cols-5 gap-2">
            <div className="row-span-2">
              <img src={productImg} alt="shoes" className="rounded" />
            </div>
            <div className="col-span-3 truncate pl-1 text-sm text-gray">
              {item.productName}
            </div>
            <div
              className="row-span-2 flex cursor-pointer items-center justify-center text-gray"
              onClick={deleteItem}
            >
              <Delete />
            </div>
            <div className="col-span-2 pl-1 text-sm text-gray">
              ${item.price} x {item.quantity}
            </div>
            <div className="col-span-1 text-sm">${total}.00</div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
