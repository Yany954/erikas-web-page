import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Issues from "./pages/Issues";
import Conclusions from "./pages/Conclusions";

function WebRoutes() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}></Route> 
        <Route path="/aboutme" Component={AboutMe}></Route>
        <Route path="/issues" Component={Issues}></Route> 
        <Route path="/conclusions" Component={Conclusions}></Route>  
      </Routes>
  </BrowserRouter>
  );
}

export default WebRoutes;
