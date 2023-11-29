import React from "react";
import Header from "../components/Globals/Header/Header";
import Section2 from "../components/Home/Section2/Section2";
import Section1 from "../components/Home/Section1/Section1";
import Grafic from "../components/Globals/Grafic/Grafic";
import Footer from "../components/Globals/Footer/Footer";
import { useLocation } from "react-router-dom";

/**
 *
 * @returns {React.Component} pagina Home
 */

function Home() {
  const location = useLocation();
    const selectedPage = location.pathname; 
    const onPageSelectHandler = (page) => {
        // Lógica para manejar el cambio de página aquí
        console.log("Se seleccionó la página:", page);
      };
    return(
        <div>
            <Header onPageSelect={onPageSelectHandler} selectedPage={selectedPage} />
            <Section1 />
            <Section2 />
            <Grafic />
            <Footer />

    </div>
  );
}
export default Home;
