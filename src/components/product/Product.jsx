import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product({ product }) {
  return (
    <div className="m-product">
      <img
        src={product.image}
        alt={`${product.judul}`}
        loading="lazy"
      />
      <h5>{product.judul}</h5>
      <button className="m-button">
        <Link to={`/products-${product.id}`} className="m-link">
          Details
        </Link>
      </button>
    </div>
  );
}

export default Product;
