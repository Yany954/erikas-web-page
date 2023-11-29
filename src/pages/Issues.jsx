import React from "react";
import Header from "../components/Globals/Header/Header";
import Grafic from "../components/Globals/Grafic/Grafic";
import { useLocation } from "react-router-dom";
import Section1 from "../components/Issues/Section1/Section1";
import Section2 from "../components/Issues/Section2/Section2";
import Section3 from "../components/Issues/Section3/Section3";
import Footer from "../components/Globals/Footer/Footer";


/**
 *
 * @returns {React.Component} pagina Home
 */

function Issues() {
  const location = useLocation();
    const selectedPage = location.pathname; 
    const onPageSelectHandler = (page) => {
        console.log("Se seleccionó la página:", page);
      };
    return(
        <div>
            <Header onPageSelect={onPageSelectHandler} selectedPage={selectedPage} />
            <Section1 />
            <Section2 />
            <Section3 />
            {/* <Grafic /> */}
            <Footer />

    </div>
  );
}
export default Issues;
