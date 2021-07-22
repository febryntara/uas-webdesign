import React, { useEffect, useRef, useState } from "react";
import "./Bag.css";
import { Link } from "react-router-dom";

function Popup({ products, show, getDisplay }) {
  const ref = useRef(false);
  const [display, setDisplay] = useState(show);
  const areYouSure = () => {
    const dialog = window.confirm("Process Order?");
    ref.current = dialog;
    if (dialog === true) {
      getDisplay(show);
      alert("We will direct you to our manager in 3 seconds");
      setTimeout(() => {
        window.location.href = "https://www.instagram.com/febryntaraaa/";
      }, 3000);
    }
  };
  // useEffect(() => {
  //   if (ref.current === true) {

  //   }
  // });
  console.log(show);
  return (
    <div className="m-popup">
      <div className="m-popup-box">
        <h2>Order Process</h2>
        <ol>
          {products.map((data) => (
            <li key={data.id}>
              Product <b>{data.judul}</b> : Qty <b>{data.count}</b>
            </li>
          ))}
        </ol>
        <button className="m-button" onClick={() => areYouSure()}>
          GET MY ITEM!
        </button>
        <button className="m-button" onClick={() => getDisplay(display)}>
          CANCEL
        </button>
      </div>
    </div>
  );
}

function Bag({ products, delProduct }) {
  const [display, setDisplay] = useState(false);
  const [listItem, setListItem] = useState([]);
  const [temp, setTemp] = useState({ judul: "", count: 0 });
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
  const getDisplay = (value) => {
    setDisplay(!display);
  };

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
            <p>
              <b>{product.count}</b>
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
      <button
        className="m-button m-bag-button"
        onClick={() => setDisplay(!display)}
      >
        PROCESS!
      </button>
      {display ? (
        <Popup products={products} show={display} getDisplay={getDisplay} />
      ) : null}
    </div>
  );
}

export default Bag;
