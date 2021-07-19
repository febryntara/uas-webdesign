import React, { useEffect, useState } from "react";
import "./Bag.css";
import { Link } from "react-router-dom";
function Bag({ products, delProduct }) {
  if (products.length === 0) {
    return (
      <h2 className="m-bag-alert">
        No Items in Bag...
        <Link to="/products" className="m-button m-link">
          Products
        </Link>
      </h2>
    );
  }
  return (
    <div className="m-bag">
      <div className="m-bag-box">
        {products.map((product, index) => (
          <div key={index} className="m-items">
            <img src={product.image} alt={product.judul} />
            <h4>{product.judul}</h4>
            <p>
              Rp. <b>{product.price}</b>
            </p>
            <button
              className="m-button"
              onClick={() => delProduct(product.index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button className="m-button m-bag-button">PROCESS!</button>
    </div>
  );
}

export default Bag;
