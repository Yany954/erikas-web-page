import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import { pathRoutes } from "./PathRoutes";
import Conclusions from "../pages/Conclusions";
import Issues from "../pages/Issues";
import AboutMe from "../pages/AboutMe";
import ProsCons from "../pages/ProsCons";


function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pathRoutes.home} Component={Home}></Route>
        <Route path={pathRoutes.issues} Component={Issues}></Route>
        <Route path={pathRoutes.proscons} Component={ProsCons}></Route>
        <Route path={pathRoutes.aboutme} Component={AboutMe}></Route>
        <Route path={pathRoutes.conclusions} Component={Conclusions}></Route>
     </Routes>
    </BrowserRouter>
  );
}
export default WebRoutes;
