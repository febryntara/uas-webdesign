import React, { useEffect, useState } from "react";
import ProductAPI from "../../config/productAPI/ProductAPI";
import Product from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductAPI.find()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err));
    console.log(products);
  }, []);
  return (
    <div className="m-productlist">
        <h3>OUR PRODUCTS</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
