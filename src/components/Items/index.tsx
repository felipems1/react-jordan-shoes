import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddProduct } from "../../redux/reducers/cartReducer";
import * as C from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import items from "../../data/items";
import ItemType from "../../types/ItemType";

const Items = () => {
  const carousel = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();

  const handleAddToCart = (item: ItemType) => {
    dispatch(AddProduct(item));
  };

  const handleNext = (e: React.SyntheticEvent) => {
    e.preventDefault();

    carousel.current!.scrollLeft += carousel.current!.offsetWidth;
  };

  const handleBack = (e: React.SyntheticEvent) => {
    e.preventDefault();

    carousel.current!.scrollLeft -= carousel.current!.offsetWidth;
  };

  return (
    <C.Container>
      <C.Title>Destaques</C.Title>
      <C.Description>
        Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
      </C.Description>
      <C.Items ref={carousel}>
        {items.map((item, index) => (
          <C.ItemArea key={index}>
            <C.ItemImage src={item.image} />
            <C.ItemTitle>{item.title}</C.ItemTitle>
            <C.Info>
              <C.Price>R$ {item.price.toFixed(2)}</C.Price>
              <C.Cart onClick={() => handleAddToCart(item)}>
                <AiOutlineShoppingCart size={25} color="f8f8f8" />
              </C.Cart>
            </C.Info>
          </C.ItemArea>
        ))}
      </C.Items>
      <C.Buttons>
        <C.Button onClick={handleBack}>
          <BiChevronsLeft size={40} />
        </C.Button>
        <C.Button onClick={handleNext}>
          <BiChevronsRight size={40} />
        </C.Button>
      </C.Buttons>
    </C.Container>
  );
};

export default Items;
