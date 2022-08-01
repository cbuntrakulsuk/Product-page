import React, { useState } from "react";

const CartContext = React.createContext([{}, () => {}]);

const CartProvider = ({ children }) => {
  const [state, setState] = useState([]);
  return (
    <CartContext.Provider value={[state, setState]}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
