import  React from "react"
import { Background, Label, Input} from "./style"
import ImgBurguer from '../../assets/img-burguer.png'
import { useNavigate } from "react-router-dom"
import Title from "../../components/title/index"
import Button from "../../components/button"

function AppHome(){
    const navigate = useNavigate();

    function RouterView(){
        navigate("/View")
    }

return(
    <Background>
        <img src={ImgBurguer} ></img>
        <Title>Faça seu Pedido</Title>
        <Label> Pedido: </Label>
        <Input/>
        <Label > Nome do cliente:</Label>
        <Input/>
        <Button ButtonCreate = {true} onClick={RouterView}> cadastrar </Button>
        
    </Background>
)

}
export default AppHome