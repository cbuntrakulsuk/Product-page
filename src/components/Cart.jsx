import Product from "./Product";

function Cart(props) {
  return (
    <div className=" bg-white mt-3 rounded-md font-bold p-5 mx-5">
      Cart
      <hr className="mt-6 text-zinc-300"></hr>
      <Product
        title={props.items.product}
        price={props.items.price}
        quantity={props.items.quantity}
      />
      <div className="mt-6 m-auto text-center bg-orange rounded-md h-12 flex items-center justify-center font-bold text-white">
        Checkout
      </div>
    </div>
  );
}

export default Cart;
