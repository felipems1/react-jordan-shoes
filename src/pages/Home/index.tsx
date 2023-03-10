import * as C from "./style";

import Banner from "../../components/Banner";
import Items from "../../components/Items";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <C.Container>
      <Banner />
      <Items />
      <Footer />
    </C.Container>
  );
};

export default Home;
