import React from "react"
import {Background, DivPedido} from "../ViewPedido/style"
import ImgPedido from '../../assets/img-saco.png'
import Button from '../../components/button/index'
import Title from '../../components/title/index'
import { useNavigate } from "react-router-dom";
import Lixo from "../../assets/Lixo.svg.svg"

function AppView(){
    const Navigate = useNavigate();
    function BackCreate(){  
        Navigate("/")}
      
return(
    <Background>
        <img src={ImgPedido}/>
        <Title> Pedidos </Title>
        <DivPedido>
            <ul>
<p id="Pedido"> 'Pedido'</p>
<img id= "Trash" src={Lixo}/>
<p id="Cliente"> 'Cliente'</p>

            </ul>
        </DivPedido>
       
        <Button onClick={BackCreate}> voltar </Button>
        
    </Background>
)

}
export default AppView