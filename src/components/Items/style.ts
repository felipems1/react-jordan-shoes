import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-top: 15px;
  color: #181818;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 15px;
  margin-top: 10px;
  color: #474747;
  text-align: center;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-top: 30px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemArea = styled.div`
  width: 300px;
  height: 200px;
  background-color: #ebe9ea;
  border-radius: 10px;
  margin: 0 25px;
`;

export const ItemImage = styled.img`
  width: 200px;
`;

export const ItemTitle = styled.h3`
  text-align: center;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  margin-top: 10px;
`;

export const Price = styled.span`
  font-weight: bold;
`;

export const Cart = styled.div`
  background-color: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 5px;
`;

export const Buttons = styled.div`
  margin: 0 auto;
  margin-top: 10px;
`;

export const Button = styled.button`
  border: 0;
  background-color: transparent;
`;
