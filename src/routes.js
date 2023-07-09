import React from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import CreatPedido from "./Containers/CreatePedido/index"
import ViewPedido from "./Containers/ViewPedido/index"


function MyRoutes(){
return (
<BrowserRouter>
<Routes>
<Route path = "/" element= {<CreatPedido/>}></Route>
<Route path = "/View" element ={<ViewPedido/>}></Route>

</Routes>
</BrowserRouter>

)



}
export default MyRoutes