
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter>
<NavBar></NavBar>
</BrowserRouter>);
