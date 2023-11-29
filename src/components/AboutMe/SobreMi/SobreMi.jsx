import React from "react";
import Foto from "../../../assets/img/erika_foto.jpeg";
import Llorar from "../../../assets/img/erika_llorando2.png";
import "./SobreMi.css";

function SobreMi() {
  return (
    <section className="aboutme-section1-info">
    <section className="about-me-llorando">
      <img className="aboutme-logo" src={Llorar} alt="foto-descripcion"></img>
      <img className="aboutme-img" src={Foto} alt="foto-descripcion"></img>
      <img className="aboutme-logo" src={Llorar} alt="foto-descripcion"></img>
    </section>
    <section className="container-about-me-info">
    <p className="aboutme-info">
      Hello, my name is Erika Martinez, I am 19 years old, and I am from Cuba. I am a currently student at Miami Dade College in my first semester of Pre-requirements for the nursing program. I came to the United States when I was 14 years old. I want to become a nurse because I love helping people, but I’m not leaving my career in nurse I want to become a neurologist. The topic of woman issues has a connection to my life first because I’m a woman and I have always fight for gender equality in my own ways.
    </p>
    </section>
    
  </section>
);
}

export default SobreMi;
