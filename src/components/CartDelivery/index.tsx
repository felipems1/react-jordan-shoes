import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Finish } from "../../redux/reducers/cartReducer";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import * as C from "./style";
import axios from "axios";

const CartDelivery = () => {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const products = useAppSelector((state) => state.cart.products);

  useEffect(() => {
    handleUpdateCart();
  }, [products]);

  const handleUpdateCart = () => {
    let total = 0;

    for (let i in products) {
      let productItem = products.find((item) => item.id == products[i].id);

      total += productItem!.price * products[i].qt;
    }
    setTotalPrice(total);
  };

  const getCep = async (cep: string) => {
    if (cep.length >= 8) {
      await axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          setLogradouro(response.data.logradouro);
          setBairro(response.data.bairro);
          setLocalidade(response.data.localidade);
        })
        .catch((error) => console.log(error));
    } else {
      toast.error("Cep incorreto!");
    }
  };

  const handleFinish = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (products.length == 0) {
      toast.error("Nenhum produto adicionado!");
      return;
    }

    if (cep !== "" && localidade !== "" && logradouro !== "" && bairro !== "") {
      setLogradouro("");
      setBairro("");
      setCep("");
      setLocalidade("");
    } else {
      toast.error("Preencha todos os campo!");
      return;
    }

    dispatch(Finish([]));
    toast.success("Compra finalizada!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Title>Endereço</C.Title>
      <C.Form>
        <C.Cep>
          Cep:
          <C.Search>
            <C.InputCep
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="00000-000"
              maxLength={8}
            />
            <FaSearch size={20} onClick={() => getCep(cep)} />
          </C.Search>
        </C.Cep>
        <C.Road>
          Rua:
          <C.Input
            type="text"
            value={logradouro}
            placeholder="Digite o nome da rua"
          />
        </C.Road>
        <C.Neighborhood>
          Bairro:
          <C.Input
            type="text"
            value={bairro}
            placeholder="Digite o nome do bairro"
          />
        </C.Neighborhood>
        <C.City>
          Cidade:
          <C.Input
            type="text"
            value={localidade}
            placeholder="Digite o nome da cidade"
          />
        </C.City>
        <C.AreaPrice>
          <C.TitlePrice>Valor:</C.TitlePrice>
          <C.Price>R$ {totalPrice.toFixed(2)}</C.Price>
        </C.AreaPrice>
        <C.Button onClick={handleFinish}>Finalizar compra</C.Button>
      </C.Form>
    </C.Container>
  );
};

export default CartDelivery;
