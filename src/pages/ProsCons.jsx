import Section3 from "../components/Issues/Section3/Section3";
import React from "react";
import Header from "../components/Globals/Header/Header";
import { useLocation } from "react-router-dom";
import Footer from "../components/Globals/Footer/Footer";


/**
 *
 * @returns {React.Component} pagina Home
 */

function ProsCons() {
  const location = useLocation();
    const selectedPage = location.pathname; 
    const onPageSelectHandler = (page) => {
        console.log("Se seleccionó la página:", page);
      };
    return(
        <div>
            <Header onPageSelect={onPageSelectHandler} selectedPage={selectedPage} />
            <Section3 />
            <Footer />

    </div>
  );
}
export default ProsCons;
