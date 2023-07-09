import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoutes from "./routes";
import globalStyles from './globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <> <MyRoutes /> <globalStyles/></> 
);
