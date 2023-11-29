import React from "react";
import sello from "../../../assets/img/logo_erika.png";
import './Grafic.css'

const Grafic = () => {
  return (
    <span  >
      <a  className="grafic-icon-link">
        <img src={sello} alt="grafic-icon" className="grafic-icon" />
      </a>
    </span>
  );
};

export default Grafic;
