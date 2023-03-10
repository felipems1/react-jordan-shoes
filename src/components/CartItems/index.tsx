import { useDispatch } from "react-redux";
import { ChangeProduct } from "../../redux/reducers/cartReducer";
import * as C from "./style";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const CartItems = () => {
  const dispatch = useDispatch();

  const products = useAppSelector((state) => state.cart.products);

  const handleProductChange = (key: number, type: string) => {
    dispatch(ChangeProduct({ key, type }));
  };
  return (
    <C.Container>
      <C.Title>Produtos</C.Title>
      <C.AreaProducts>
        {products.length == 0 && <C.Info>Adicione algum produto.</C.Info>}
        {products.map((item, index) => (
          <C.Product key={index}>
            <C.AreaImage>
              <C.Image src={item.image} />
            </C.AreaImage>
            <C.AreaInfo>
              <C.TitleProduct>{item.title}</C.TitleProduct>
              <C.PriceProduct>R$ {item.price.toFixed(2)}</C.PriceProduct>
              <C.AreaButtons>
                <AiOutlineMinusCircle
                  size={20}
                  onClick={() => handleProductChange(index, "-")}
                />
                <C.Quantity>{item.qt}</C.Quantity>
                <AiOutlinePlusCircle
                  size={20}
                  onClick={() => handleProductChange(index, "+")}
                />
              </C.AreaButtons>
            </C.AreaInfo>
          </C.Product>
        ))}
      </C.AreaProducts>
    </C.Container>
  );
};

export default CartItems;
