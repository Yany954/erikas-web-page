import React from "react";
import "./Section2.css";
import image1 from "../../../assets/img/employment-image.png";
import image2 from "../../../assets/img/education-image2.png";
import image3 from "../../../assets/img/domestic_abuse.webp";
import image4 from "../../../assets/img/stereotypes.webp";

function Section2() {
  return (
    <section className="issues-section2">
      <h1 className="issue-title">Major Issues</h1>
      <article className="issues-section2-info">
        <ul className="issue-list">
          <li>
            <strong>Employment:</strong> Employment discrimination against women persists in various forms, contributing to a complex landscape of inequality. The wage gap continues to be a prominent issue, with women often earning less than their male counterparts for equivalent work.
            <div className="image-container">
              <img src={image1} alt="Image1" />
            </div>
          </li>
          <li>
            <strong>Education:</strong> Education discrimination against women has historical roots that persist in contemporary society. While strides have been made toward gender equality in education, disparities still exist. In some regions, girls may face barriers such as limited access to schooling, early marriage, or cultural biases that prioritize male education.
            <div className="image-container">
              <img src={image2} alt="Image2" />
            </div>
          </li>
          <li>
            <strong>Domestic abuse:</strong> Domestic abuse against women is a pervasive and deeply troubling issue, encompassing various forms of physical, emotional, or financial harm within intimate relationships. It is a violation of human rights that affects women across diverse socio-economic backgrounds, cultures, and ages.
            <div className="image-container">
              <img src={image3} alt="Image3" />
            </div>
          </li>
          <li>
            <strong>Stereotypes:</strong> Stereotypes about women persist as ingrained societal expectations that often limit individual potential and reinforce gender inequality. Common stereotypes depict women as emotional, nurturing, or solely defined by traditional roles, overlooking the diverse talents, ambitions, and strengths of women across various fields. These preconceived notions can influence career choices, opportunities, and treatment in both personal and professional settings.
            <div className="image-container">
              <img src={image4} alt="Image4" />
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Section2;
