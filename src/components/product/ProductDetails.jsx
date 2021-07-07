import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductAPI from "../../config/productAPI/ProductAPI";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    ProductAPI.detail(id).then((res) => {
      setProduct(res);
      console.log(product);
      setIsLoading(false);
    });
  }, []);
  if (isLoading === true) {
    return (
      <div className="m-details">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="m-details">
      <h3 className="m-button">PRODUCT DETAILS</h3>
      <div className="m-details-box">
        <div className="m-details-image">
          <img
            src={`http://localhost:1337${product.image.formats.large.url}`}
            alt={`${product.judul}`}
          />
        </div>
        <div className="m-details-info">
          <h3>{product.judul}</h3>
          <p>{product.description}</p>
          <p><b>Rp. {product.price}</b></p>
          <button className="m-button">
            <Link to="/products" className="m-link">
              Back
            </Link>
          </button>
          <button className="m-button">Add To Bag</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
