import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="m-hero">
      <div className="m-hero-bgr"></div>
      <div className="m-hero-box">
        <div className="m-hero-text">
          <h3><b>Clean, Cruelty-Free, Planet-Friendly Products</b></h3>
          <p>
            We make transformative products you can feel good about to help make
            you - and your skin – happy! All of our products are 100%
            cruelty-free, free from more than 1,300 harmful ingredients you
            don’t want on your skin or body, and 100% recyclable
          </p>
          <button className="m-button">About Us</button>
          <button className="m-button">SHOPING!</button>
        </div>
        <img src="https://docs.google.com/uc?id=1S1OfV6U30uEdwSlpe97eqmpMGMB9J_TH" alt="" />
      </div>
    </div>
  );
}

export default Hero;
