import * as C from "./style";

import CartItems from "../../components/CartItems";
import CartDelivery from "../../components/CartDelivery";

const Cart = () => {
  return (
    <C.Container>
      <CartItems />
      <CartDelivery />
    </C.Container>
  );
};

export default Cart;
