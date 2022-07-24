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
      <div className="flex">
        <div className="text-2xl font-bold w-1/3">$125.00</div>
        <div className="w-1/3">
          <div className="bg-paleOrange text-orange font-bold w-10">50%</div>
        </div>
        <div className="w-1/3">$250.00</div>
      </div>

      <div className="flex bg-zinc-100 rounded-md mb-2">
        <button className="w-1/3 text-orange"> - </button>
        <div className="w-1/3"> Count </div>
        <button className="w-1/3 text-orange"> + </button>
      </div>

      <button className="bg-orange text-white font-bold rounded-lg w-full h-11">
        Add to Cart
      </button>
    </div>
  );
}

export default Desc;
