import React from "react"
import {Background, Lista} from "../ViewPedido/style"
import ImgPedido from '../../assets/img-saco.png'
import Button from '../../components/button/index'
import Title from '../../components/title/index'
import { useNavigate } from "react-router-dom";
import Lixo from "../../assets/Lixo.svg.svg";



function AppView(){
    const Navigate = useNavigate();
    const pedidos = [{pedido: "hamburguer", cliente:"Caio"} , {pedido: "batata", cliente:"Lele"}]
    function BackCreate(){  
        Navigate("/")}
      
return(
    <Background>
        <img src={ImgPedido}/>
        <Title>Pedido</Title>
                    <ul>
                {pedidos.map(user =>{
                    return(
                    <Lista key={user.id}>
                        <div id ="paragrafos">
                    <p id="Pedido">{user.pedido}</p>
                    <p id="Cliente">{user.cliente}</p>
                    </div>
                    <button> <img id= "Trash" src={Lixo}/> </button>
                    </Lista>)
                })                
                }
            </ul>
<Button onClick={BackCreate}> voltar </Button>
        
    </Background>
)

}
export default AppView