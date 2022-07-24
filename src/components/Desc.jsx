import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Cart } from "../images/icon-cart.svg";

function Desc() {
  return (
    <div className="mx-auto px-5 py-5">
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

      <div className="flex bg-zinc-100 rounded-md mb-4 h-12">
        <button className="flex items-center justify-center w-1/3 text-orange">
          <Minus />
        </button>
        <div className="flex justify-center items-center w-1/3 font-bold">
          {" "}
          0{" "}
        </div>
        <button className="flex justify-center items-center w-1/3 text-orange">
          <Plus />
        </button>
      </div>

      <button className="flex gap-4 justify-center items-center bg-orange text-white font-bold rounded-lg w-full h-11">
        <Cart className="fill-slate-50" /> Add to Cart
      </button>
    </div>
  );
}

export default Desc;
