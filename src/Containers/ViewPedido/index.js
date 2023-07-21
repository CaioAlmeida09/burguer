import React from "react";
import { Background, Lista } from "../ViewPedido/style";
import ImgPedido from "../../assets/img-saco.png";
import Button from "../../components/button/index";
import Title from "../../components/title/index";
import { useNavigate } from "react-router-dom";
import Lixo from "../../assets/Lixo.svg.svg";
import axios from "axios";
import { useState, useEffect } from "react";

function AppView() {
  const [pedidos, setPedidos] = useState([]);
  const Navigate = useNavigate();

  function BackCreate() {
    Navigate("/");
  }

  useEffect(() => {
    async function RecuperatePedidos() {
      const response = await axios.get("http://localhost:3001/pedidos");
      setPedidos(response.data);
    }
    RecuperatePedidos();
  }, []);

  async function DeleteUser(pedidoID) {
    await axios.delete(`http://localhost:3001/delete/${pedidoID}`);
    const NewPedidos = pedidos.filter((pedido) => pedido.id !== pedidoID);
    setPedidos(NewPedidos);
    console.log(pedidoID);
  }

  return (
    <Background>
      <img src={ImgPedido} alt="imagem-pedido" />
      <Title>Pedido</Title>

      <ul>
        {pedidos.map((pedido) => {
          return (
            <Lista key={pedido.id}>
              <div id="paragrafos">
                <p id="Pedido">{pedido.mypedido}</p>
                <p id="Cliente">{pedido.name}</p>
              </div>
              <button onClick={() => DeleteUser(pedido.id)}>
                <img id="Trash" src={Lixo} alt="lixo" />
              </button>
            </Lista>
          );
        })}
      </ul>
      <Button onClick={BackCreate}> voltar </Button>
    </Background>
  );
}
export default AppView;
