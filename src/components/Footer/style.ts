import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 200px;
  background-color: #ebe9ea;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 428px) {
    width: 95%;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SocialTitle = styled.h3`
  font-size: 13px;
`;
