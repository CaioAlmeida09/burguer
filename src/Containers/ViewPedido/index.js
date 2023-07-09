import React from "react"
import {Background, Input} from "../ViewPedido/style"
import ImgPedido from '../../assets/img-saco.png'
import Button from '../../components/button/index'
import Title from '../../components/title/index'
import {useNavigate} from "react-router-dom"

function AppView(){

}
return(
    <Background>
        <img src={ImgPedido} ></img>
        <Title>Pedidos</Title>
        <Input/>
        <Input/>
        <Button> voltar </Button>
        
    </Background>
)

}
export default AppView