import React from "react"
import {Background, DivPedido} from "../ViewPedido/style"
import ImgPedido from '../../assets/img-saco.png'
import Button from '../../components/button/index'
import Title from '../../components/title/index'
import { useNavigate } from "react-router-dom";
import Lixo from "../../assets/Lixo.svg.svg"
import pedido from "../CreatePedido/index"


function AppView(){
    const Navigate = useNavigate();
    
    function BackCreate(){  
        Navigate("/")}
      
return(
    <Background>
        <img src={ImgPedido}/>
        <Title> {pedido} </Title>
        <DivPedido>
            <ul>
<p id="Pedido"> 'Pedido'</p>
<p  id="Cliente"> 'Cliente'</p>
            </ul>
<img id= "Trash" src={Lixo}/>
        </DivPedido>
       
        <Button onClick={BackCreate}> voltar </Button>
        
    </Background>
)

}
export default AppView