import React, { useEffect, useState } from "react";
import ProductAPI from "../../config/productAPI/ProductAPI";
import { Link } from "react-router-dom";
import "./NewArrival.css";
function NewArrival() {
  const [arrival, setArrival] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    ProductAPI.find()
      .then((res) => {
        setArrival(res);
        setNewArrival(res.slice(res.length - 3, res.length));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isLoading === true) {
    return (
      <h2 style={{ width: "100%", textAlign: "center", color: "black" }}>
        Loading...
      </h2>
    );
  }
  return (
    <div className="m-arrival">
      <div className="m-arrival-title">
        <h3>
          <b>NEW ARRIVAL</b>
        </h3>
        <p>
          Check out the latest in clean, cruelty-free, planet-friendly
          cosmetics.
        </p>
      </div>
      <div className="m-arrival-box">
        {newArrival.map((arr, index) => (
          <div key={index} className="m-arrival-content">
            <img src={arr.image} alt={arr.judul} />
            <h5>{arr.judul}</h5>
            <p>Rp. {arr.price}</p>
            <Link to={`/products-${arr.id}`} className="m-button m-link">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewArrival;
