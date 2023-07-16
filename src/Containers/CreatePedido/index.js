import  React from "react";
import { Background, Label, Input, ButtonPedido} from "./style";
import ImgBurguer from '../../assets/img-burguer.png';
import { useNavigate } from "react-router-dom";
import Title from "../../components/title/index";
import Button from "../../components/button";
import {useState, useRef} from  "react"
import axios from "axios"

function AppHome(){
    const InputPedido = useRef()
    const InputCliente = useRef()
    const navigate = useNavigate();
    const [pedidos, setPedidos] = useState([]);
    

   async function AddPedido(){
      //setPedidos([...pedidos,
    //{ id: Math.random()*10 , Pedido: InputPedido.current.value, Cliente:InputCliente.current.value}])}
    const Data = await axios.post("http://localhost:3001/pedido", {name: InputCliente.current.value, mypedido:InputPedido.current.value})
    }
    function RouterView(){
        navigate("/View")}
    

return (    
    <Background>
        <img src={ImgBurguer} ></img>
        <Title>Faça seu Pedido</Title>
        <Label> Pedido: </Label>
        <Input ref={InputPedido}/>
        <Label > Nome do cliente:</Label>
        <Input ref={InputCliente}/>
        <Button onClick={AddPedido} > cadastrar </Button>
        <ButtonPedido ButtonCreate = {true} onClick={RouterView}> Pedidos </ButtonPedido>
        
    </Background>
)
}
export default AppHome