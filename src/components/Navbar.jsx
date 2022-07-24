import { ReactComponent as Menu } from "../images/icon-menu.svg";
import { ReactComponent as Cart } from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";

function Navbar() {
  return (
    <nav className="flex items-center bg-white h-16 w-full">
      <div className="mx-5 my-4">
        <Menu />
      </div>
      <div className="text-xl font-bold font-kumhb w-1/2">sneakers</div>
      <div className="w-1/2 flex justify-end mr-5">
        <Cart />
      </div>
      <div className="scale-50 mr-5">
        <img src={Avatar} alt="Profile Avatar" />
      </div>
    </nav>
  );
}

export default Navbar;
