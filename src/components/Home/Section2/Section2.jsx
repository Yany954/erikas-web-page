import React from "react";
import "./Section2.css";
import Home1 from "../../../assets/img/home_img1.webp"
import Home2 from "../../../assets/img/home_img2.webp"
import Home3 from "../../../assets/img/home_img3.jpeg"
const Section2 = () => {
  return (
    <section className="section2">
      <div className="container-text">
        <article className="section2-text">
          <p className="text-2">
          Women's issues encompass a broad range of concerns that disproportionately affect women in various aspects of life. These issues can include gender inequality, reproductive rights, workplace discrimination, violence against women, and more. Addressing and understanding these challenges is crucial for promoting gender equity and creating a more inclusive society.
This web page is designed with the purpose of creating awareness, informing and educate about the topic. 
          </p>
          <div className="home-images">
            <img src={Home1}></img>
            <img src={Home2}></img>
            <img src={Home3}></img>

          </div>
        </article>
        
      </div>

    </section>
    
  );
};

export default Section2;
