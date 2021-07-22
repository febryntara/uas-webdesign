import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="m-hero">
      <div className="m-hero-bgr"></div>
      <div className="m-hero-box">
        <div className="m-hero-text">
          <h3>
            <b>Clean, Cruelty-Free, Planet-Friendly Products</b>
          </h3>
          <p>
            We make transformative products you can feel good about to help make
            you - and your skin – happy! All of our products are 100%
            cruelty-free, free from more than 1,300 harmful ingredients you
            don’t want on your skin or body, and 100% recyclable
          </p>
          <Link to="/about" className="m-button m-link">
            About Us
          </Link>
          <Link to="/products" className="m-button m-link">
            SHOPING!
          </Link>
        </div>
        <img
          src="https://docs.google.com/uc?id=1S1OfV6U30uEdwSlpe97eqmpMGMB9J_TH"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
