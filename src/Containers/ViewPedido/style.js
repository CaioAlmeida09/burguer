import styled from "styled-components"


export const Background = styled.div`
background: #000000;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h1{
    color: 
#FFFFFF;
font-size: 28px;
margin: 40px auto
}
img{
    width:242px;
    height:254px;
}
`
export const Label = styled.label`
font-size: 10px;
`
export const DivPedido = styled.div`
display: flex;
margin: 10px auto;
width: 237px;
height: 63px;
box-shadow: 0px 4px 4px 0px ;
background: #A9A9A9;
padding:20px;
justify-content: space-between;
ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
#Trash{
width: 26px;
height: 28px;
margin-top: 7%;
cursor: pointer;
}
p{
    font-size: 17px;
    color: #333;
}
`