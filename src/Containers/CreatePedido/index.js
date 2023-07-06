import  React from "react"
import { Background, Label, Input, Button} from "./style"
import ImgBurguer from '../../assets/img-burguer.png'


function AppHome(){

return(
    <Background>
        <img src={ImgBurguer} ></img>
        <h1>Title</h1>
        <Label> Pedido </Label>
        <Input/>
        <Label> Nome do cliente</Label>
        <Input/>
        <Button> cadastrar </Button>
        
    </Background>
)

}
export default AppHome