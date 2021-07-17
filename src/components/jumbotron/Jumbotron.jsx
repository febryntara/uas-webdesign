import React from "react";
import "./Jumbotron.css";

function Jumbotron() {
  return (
    <div className="m-jumbotron">
      <div className="m-jumbotron-box m-jumbotron-1">
        <img
          src="https://docs.google.com/uc?id=1weCLfx-JNEbvy4ONZzpy0PBVKZF3Sb1u"
          alt=""
        />
        <div className="m-jumbotron-content">
          <p>
            Recomended! Essentials Face Cream Make your face better every day
          </p>
          <button className="m-button">Shop Now</button>
        </div>
      </div>
      <div className="m-jumbotron-box m-jumbotron-2">
        <img
          src="https://docs.google.com/uc?id=1nPA1sl1Ma1zbQM8Gu_b4M31jbxIER270"
          alt=""
        />
        <div className="m-jumbotron-content">
          <p>All item using natural ingredients Dont worry, be HAPPY!</p>
          <button className="m-button">Products</button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
