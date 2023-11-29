import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Globals/Header/Header";
import Footer from "../components/Globals/Footer/Footer";
import Section1 from "../components/Conclutions/Section1";


function Conclusions() {
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
      <Footer />

    </div>
  );
}
export default Conclusions;
