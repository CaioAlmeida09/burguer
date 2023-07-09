import styled from "styled-components";



export const Button = styled.button`
width:  202px;
height: 48px;
margin-top: 35px;
background: ${props => props.ButtonCreate ? 'rgba(217, 56, 86, 1)' :'#5b5b58' };
color: #ffffff;
border-radius: 10px;
cursor: pointer;
font-size: 15px;
font-weight: 8px;`

export default Button