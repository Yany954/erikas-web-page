import React from 'react';
import './Section3.css';

import image1 from "../../../assets/img/gender-equality.png";
import image2 from "../../../assets/img/gender-inequality-in-the-workplace.jpg";

function Section3() {
  return (
    <section className='issues-section3'>
      <section className='issues-section3-info'>
        <div className='pros'>
          <h2>Pros</h2>
          <img src={image1} alt="Pros 1" />
          <ul className='pros-list'>
            
            <li className='pro-item'>
              
              <p>Gender Equality</p>
            </li>
            <li className='pro-item'>
              <p>Economic Growth</p>
            </li>
            <li className='pro-item'>
              <p>Social Progress</p>
            </li>
            <li className='pro-item'>
              <p>Health and Well-being</p>
            </li>
          </ul>
        </div>

        <div className='cons'>
          <h2>Cons</h2>
          <img src={image2} alt="Cons 1" />
          <ul className='cons-list'>
            <li className='con-item'>
              
              <p>Gender Inequality</p>
            </li>
            <li className='con-item'>
              <p>Economic Disparities</p>
            </li>
            <li className='con-item'>
              <p>Health Challenges</p>
            </li>
            <li className='con-item'>
              <p>Social Injustice</p>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Section3;
