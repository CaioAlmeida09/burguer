import  React from "react";
import { Background, Label, Input, ButtonPedido} from "./style";
import ImgBurguer from '../../assets/img-burguer.png';
import { useNavigate } from "react-router-dom";
import Title from "../../components/title/index";
import Button from "../../components/button";
import {useState, useRef} from  "react"

function AppHome(){
    const navigate = useNavigate();
    const [pedido, setPedido ] = useState()
    const InputPedido = useRef()
    const InputCliente = useRef()


    function AddPedido(){
        console.log(InputPedido.current.value)
        console.log(InputCliente.current.value)}
        
    function RouterView(){
        navigate("/View")
    }

return (    
    <Background>
        <img src={ImgBurguer} ></img>
        <Title>Faça seu Pedido</Title>
        <Label> Pedido: </Label>
        <Input ref={InputPedido}/>
        <Label > Nome do cliente:</Label>
        <Input ref={InputCliente}/>
        <Button ButtonCreate = {true} onClick={RouterView}> cadastrar </Button>
        <ButtonPedido onClick={AddPedido}> jjhsjj </ButtonPedido>
        
    </Background>
)
}
export default AppHome