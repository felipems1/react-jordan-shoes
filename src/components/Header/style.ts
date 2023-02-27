import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
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
