import * as C from "./style";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <C.Container>
      <C.Title>Redes Sociais</C.Title>
      <C.Social>
        <C.Logo>
          <FaWhatsappSquare size={50} />
          <C.SocialTitle>Whatsapp</C.SocialTitle>
        </C.Logo>
        <C.Logo>
          <FaInstagramSquare size={50} />
          <C.SocialTitle>Instagram</C.SocialTitle>
        </C.Logo>
        <C.Logo>
          <FaTwitterSquare size={50} />
          <C.SocialTitle>Twitter</C.SocialTitle>
        </C.Logo>
        <C.Logo>
          <FaFacebookSquare size={50} />
          <C.SocialTitle>Facebook</C.SocialTitle>
        </C.Logo>
      </C.Social>
    </C.Container>
  );
};

export default Footer;
