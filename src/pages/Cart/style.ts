import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  background-color: #ccc;

  @media (max-width: 834px) {
    flex-direction: column;
    align-items: center;
  }
`;
