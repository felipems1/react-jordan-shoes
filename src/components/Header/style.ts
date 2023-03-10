import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

export const Header = styled.header`
  background-color: #f9f9f9;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  #cart {
    background-color: #181818;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    border-radius: 5px;
  }
`;

export const Title = styled.h2`
  a {
    color: #181818;
  }
`;
