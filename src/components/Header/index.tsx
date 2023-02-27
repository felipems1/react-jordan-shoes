import * as C from "./style";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <C.Header>
      <C.Title>
        <Link to="/">JordanShoes</Link>
      </C.Title>
      <Link to="/cart" id="cart">
        <AiOutlineShoppingCart size={25} color="#f8f8f8" />
      </Link>
    </C.Header>
  );
};

export default Header;
