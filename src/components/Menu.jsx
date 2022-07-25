import { ReactComponent as Close } from "../images/icon-close.svg";

function Menu(props) {
  return (
    <div>
      <Close className="ml-2 mb-8 cursor-pointer" onClick={props.closeMenu} />
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
