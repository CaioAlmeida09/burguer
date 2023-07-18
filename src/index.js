import React from "react";
import ReactDOM from "react-dom/client";
import MyRoutes from "./routes";
import GlobalStyles from "./GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <MyRoutes /> <GlobalStyles />
  </>
);
