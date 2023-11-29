import React from "react";
import Header from "../components/Globals/Header/Header";
import Footer from "../components/Globals/Footer/Footer"
import { useLocation } from "react-router-dom";
import SobreMi from "../components/AboutMe/SobreMi/SobreMi";


/**
 *
 * @returns {React.Component} pagina Home
 */

function AboutMe() {
  const location = useLocation();
    const selectedPage = location.pathname; 
    const onPageSelectHandler = (page) => {
        // Lógica para manejar el cambio de página aquí
        console.log("Se seleccionó la página:", page);
      };
    return(
        <div>
            <Header onPageSelect={onPageSelectHandler} selectedPage={selectedPage} />
            <SobreMi />
            <Footer />

    </div>
  );
}
export default AboutMe;
