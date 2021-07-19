import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"

//icons
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';


function Footer() {
  return (
    <div className="m-footer">
      <h3>BREWING</h3>
      <div className="m-footer-icons">
        <AiFillInstagram className="m-footer-icon"/>
        <SiTiktok className="m-footer-icon"/>
        <AiFillFacebook className="m-footer-icon"/>
      </div>
      <button className="m-button">
        <Link to="/about" className="m-link">About Us</Link>
      </button>
      <button className="m-button">
        <Link to="/products" className="m-link">Products</Link>
      </button>
      <button className="m-button">
        Contact Us
      </button>
      <p>&copy; I Gede Bagus Febryntara. <strong>99% full funcionality</strong></p>
    </div>
  );
}

export default Footer;
