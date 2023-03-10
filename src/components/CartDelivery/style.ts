import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
  margin-top: 25px;
  padding: 15px 25px;
  border-radius: 10px;
  width: 40%;
  height: 50%;

  @media (max-width: 834px) {
    width: 90%;
  }
`;

export const Title = styled.h1``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Search = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 5px;
`;

export const Cep = styled.label`
  margin-top: 10px;
`;

export const InputCep = styled.input`
  width: 95%;
  padding: 10px;
  outline: none;
  border: 0;
  border-radius: 10px;
  background-color: #ccc;
`;

export const Road = styled.label``;

export const Neighborhood = styled.label``;

export const City = styled.label``;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  margin-top: 5px;
  padding: 10px;
  outline: none;
  border: 0;
  border-radius: 10px;
  background-color: #ccc;
`;

export const AreaPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const TitlePrice = styled.h3``;

export const Price = styled.p``;

export const Button = styled.button`
  width: 50%;
  margin: 0 auto;
  border: 0;
  border-radius: 10px;
  background-color: #f00;
  font-weight: bold;
  color: #f9f9f9;
  text-transform: uppercase;
  padding: 10px;
  transition: all ease 0.8s;

  &:hover {
    transform: scale(1.1);
    background-color: #c00;
  }

  @media (max-width: 428px) {
    width: 80%;
  }
`;
