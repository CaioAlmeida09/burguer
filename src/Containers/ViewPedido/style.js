import styled from "styled-components";

export const Background = styled.div`
  background: #000000;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: #ffffff;
    font-size: 28px;
    margin: 20px auto;
  }
  img {
    width: 242px;
    height: 254px;
  }
`;
export const Label = styled.label`
  font-size: 10px;
`;
export const Lista = styled.li`
  display: flex;
  margin: 10px auto;
  width: 340px;
  height: 90px;
  box-shadow: 0px 4px 4px 0px;
  background: #a9a9a9;
  justify-content: space-between;
  padding: 15px;
  margin: 15px;
  #paragrafos {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
  }
  #Pedido {
    font-weight: 20px;
    font-size: 19px;
  }
  #Cliente {
    font-weight: 40px;
    font-size: 22px;
    color: #333333;
  }
  #Trash {
    width: 26px;
    height: 28px;
    margin-top: 7%;
    cursor: pointer;
  }
`;
