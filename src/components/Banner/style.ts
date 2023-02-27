import styled from "styled-components";
import Wallpaper from "../../assets/wallpaper.jpeg";

export const Banner = styled.div`
  background-image: url(${Wallpaper});
  background-size: cover;
  width: 100vw;
  height: 250px;
`;

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 250px;
  color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  margin-left: 100px;
  font-size: 30px;
`;

export const Description = styled.p`
  margin-top: 20px;
  margin-left: 100px;
  line-height: 25px;
`;
