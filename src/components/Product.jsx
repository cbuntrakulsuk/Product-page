import productImg from "../images/image-product-1-thumbnail.jpg";
import { ReactComponent as Delete } from "../images/icon-delete.svg";
import { CartContext } from "./ShoppingCartContext";

import React, { useContext } from "react";

function Product() {
  const [shoppingList, setShoppingList] = useContext(CartContext);

  function deleteItem(quantity, delIndex) {
    if (quantity > 1) {
      setShoppingList((prev) =>
        prev.map((item, index) =>
          index === delIndex ? { ...item, quantity: quantity - 1 } : item
        )
      );
    } else {
      const newArr = shoppingList.filter((item, index) => index !== delIndex);
      setShoppingList(newArr);
    }
  }

  return (
    <div>
      {shoppingList.map((item, index) => {
        let total = item.quantity * item.price;
        return (
          <div key={index}>
            <div className="mt-6 ml-4 grid grid-cols-5 gap-2">
              <div className="row-span-2">
                <img src={productImg} alt="shoes" className="rounded" />
              </div>
              <div className="col-span-3 truncate pl-1 text-sm text-gray">
                {item.productName}
              </div>
              <div
                id={index}
                className="row-span-2 flex cursor-pointer items-center justify-center text-gray"
                onClick={() => deleteItem(item.quantity, index)}
              >
                <Delete className="pointer-events-none" />
              </div>
              <div className="col-span-2 pl-1 text-sm text-gray">
                ${item.price} x {item.quantity}
              </div>
              <div className="col-span-1 text-sm">${total}.00</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
