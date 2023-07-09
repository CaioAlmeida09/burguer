import React from "react"
import Button from "./style"

function MyButton({children, ...props}){


return( 

<Button {...props}> {children} </Button>)

}
export default MyButton