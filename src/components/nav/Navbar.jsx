import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    console.log("nav mounted");
    const btnToggle = document.querySelector(".m-nav-toggle");
    const navItems = document.querySelector(".m-nav-items");
    btnToggle.addEventListener("click", function () {
      navItems.classList.toggle("m-nav-restore");
    });
    navItems.addEventListener("click", function () {
      navItems.classList.remove("m-nav-restore");
    });
  }, []);
  return (
    <div className="m-nav-container">
      <h3>Brewing</h3>

      <ul className="m-nav-items">
        <li>
          <Link className="m-link m-nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="m-link m-nav-link" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="m-link m-nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="m-link m-nav-link" to="/bag">
            Bag
          </Link>
        </li>
      </ul>
      <div class="m-nav-toggle">
        <input type="checkbox" />
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
