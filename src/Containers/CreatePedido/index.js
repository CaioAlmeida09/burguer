import  React from "react"
import { Background, Label, Input, Button} from "./style"
import ImgBurguer from '../../assets/img-burguer.png'
import { useNavigate } from "react-router-dom"



function AppHome(){
    const navigate = useNavigate();

    function RouterView(){
        navigate("/View")
    }

return(
    <Background>
        <img src={ImgBurguer} ></img>
        <h1>Faça seu Pedido</h1>
        <Label> Pedido </Label>
        <Input/>
        <Label > Nome do cliente</Label>
        <Input/>
        <Button onClick={RouterView}> cadastrar </Button>
        
    </Background>
)

}
export default AppHome