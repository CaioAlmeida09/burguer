import styled from "styled-components";

export const Background = styled.div`
  background: #000000;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: #ffffff;
    font-size: 28px;
    margin: 40px auto;
  }
  img {
    width: 242px;
    height: 254px;
  }
`;
export const Label = styled.label`
  font-size: 17px;
  font-weight: 10px;
  color: #ffffff;
`;
export const Input = styled.input`
  display: flex;
  margin: 10px auto;
  width: 280px;
  height: 70px;
  box-shadow: 0px 4px 4px 0px;
  background: #a9a9a9;
  padding: 12px;
`;
export const ButtonPedido = styled.button`
  width: 130px;
  height: 38px;
  color: #ffffff;
  background: #a06ff0;
  border: 10px;
  margin-top: 20px;
  border-radius: 12px;
  cursor: pointer;
`;
