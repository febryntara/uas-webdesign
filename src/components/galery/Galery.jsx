import React, { useEffect, useState } from "react";
import ModelApi from "../../config/productAPI/ModelAPI";
import "./Galery.css"

function Galery() {
  const [galery, setGalery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    ModelApi.find()
      .then((res) => {
        setGalery(res.slice((res.length-4),res.length))
        setIsLoading(false);
        // console.log(galery[0].image);
      })
      .catch((err) => console.log(err));
  },[]);
  if (isLoading === true) {
    return (
      <h2 style={{ width: "100%", textAlign: "center", color: "black" }}>
        Loading...
      </h2>
    );
  }
  return (
      <div className="m-galery">
          <h3><b>@BREWING</b></h3>
          <p>Your daily dose of happiness, unfiltered.</p>
          <div className="m-galery-box">
            {galery.map((data, index)=> (
                <div key={index} className="m-galery-content">
                    <img src={data.image} alt={data.name} />
                </div>
            ))}
          </div>
      </div>
  )
}

export default Galery;
