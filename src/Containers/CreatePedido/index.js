import  React from "react";
import { Background, Label, Input, ButtonPedido} from "./style";
import ImgBurguer from '../../assets/img-burguer.png';
import { useNavigate } from "react-router-dom";
import Title from "../../components/title/index";
import Button from "../../components/button";
import {useState, useRef} from  "react"
import axios from "axios"
import Swal from 'sweetalert2'



function AppHome(){
    const InputPedido = useRef()
    const InputCliente = useRef()
    const navigate = useNavigate();
    const [pedidos, setPedidos] = useState([]);
    

   async function AddPedido(){
    const newPedido = await axios.post("http://localhost:3001/pedido", {name: InputCliente.current.value, mypedido:InputPedido.current.value})
    ;
    Swal.fire(
        "Pedido realizado",
        "bom trabalho"
      )
    setPedidos([...pedidos, newPedido.data])}

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
export default AppHome;
