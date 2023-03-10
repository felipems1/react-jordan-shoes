import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
  margin-top: 25px;
  padding: 15px 25px;
  border-radius: 10px;
  width: 45%;

  @media (max-width: 834px) {
    width: 90%;
  }
`;

export const Title = styled.h1``;

export const AreaProducts = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const Product = styled.div`
  background-color: #ebe9ea;
  margin: 10px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px;

  @media (max-width: 428px) {
    padding: 10px 5px 10px 10px;
  }
`;

export const AreaImage = styled.div`
  background-color: #bbb;
  border-radius: 10px;
  margin-right: 25px;
`;

export const Image = styled.img`
  width: 200px;

  @media (max-width: 428px) {
    width: 120px;
  }
`;

export const AreaInfo = styled.div``;

export const TitleProduct = styled.h3`
  font-size: 28px;

  @media (max-width: 428px) {
    font-size: 18px;
  }
`;

export const PriceProduct = styled.span`
  font-size: 20px;
  margin-top: 10px;
`;

export const AreaButtons = styled.div`
  margin-top: 10px;
  background-color: #bbb;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  gap: 10px;
  padding: 5px;
  border-radius: 10px;

  @media (max-width: 428px) {
    width: 80%;
  }
`;

export const Quantity = styled.span`
  font-size: 20px;
`;

export const Info = styled.span`
  text-align: center;
  margin-top: 100px;
  font-size: 20px;

  @media (max-width: 834px) {
    margin: 30px 0;
  }
`;
