import { ReactComponent as Close } from "../images/icon-close.svg";

function Menu() {
  return (
    <div className="absolute top-0 z-10 bg-white h-screen w-40 mt-6 pl-4">
      <Close className="mb-8" />
      <ul className="font-bold">
        <li className="menu-item">Collections</li>
        <li className="menu-item">Men</li>
        <li className="menu-item">Women</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Contact</li>
      </ul>
    </div>
  );
}

export default Menu;
