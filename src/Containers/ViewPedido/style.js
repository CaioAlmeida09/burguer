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
    width: 241px;
    height: 254px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: 305px;
    overflow-y: auto;
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
    font-weight: 300px;
    font-size: 18px;
    color: #ffffff;
  }
  #Cliente {
    font-weight: 700px;
    font-size: 20px;
    color: #ffffff;
  }
  #Trash {
    width: 26px;
    height: 28px;
    margin-top: 7%;
    cursor: pointer;
  }
`;
export const DivTeste = styled.div`
  width: 200px;
  height: 80px;
  background: #333333;
  display: flex;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 17px auto;
  border-radius: 10px;
`;
