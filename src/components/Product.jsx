import productImg from "../images/image-product-1-thumbnail.jpg";
import { ReactComponent as Delete } from "../images/icon-delete.svg";

function Product(props) {
  let total = props.quantity * props.price;

  function deleteItem() {
    props.deleteItem();
  }

  return (
    <div className="grid grid-cols-5 gap-2 mt-6 ml-4">
      <div className="row-span-2">
        <img src={productImg} alt="shoes" className="rounded" />
      </div>
      <div className="col-span-3 text-gray text-sm truncate pl-1">
        {props.title}
      </div>
      <div
        className="row-span-2 text-gray flex justify-center items-center cursor-pointer"
        onClick={deleteItem}
      >
        <Delete />
      </div>
      <div className="col-span-2 text-gray text-sm pl-1">{props.price}</div>
      <div className="col-span-1 text-sm">${total}.00</div>
    </div>
  );
}

export default Product;
