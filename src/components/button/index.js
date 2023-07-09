import React from "react"
import Button from "./style"
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
function BackCreate(){
  navigate("/")}
function MyButton(){

return( <Button onClick={BackCreate}> voltar </Button>)
}

export default MyButton