import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="m-carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner m-carousel-box">
          <div className="carousel-item active">
            <div className="m-carousel-show">
              <img
                src="https://docs.google.com/uc?id=1ghg5UD5uj8Fwld9OBoneYqSX2LF0w-h8"
                className="m-carousel-image"
                alt="..."
              />
              <div className="m-carousel-text">
                <h2>Nova Age</h2>
                <p>
                  Introducing a new safe brightening skin solution to help
                  disguise skin pigment imperfections and reveal the smooth,
                  radiant looking skin you've always wanted. NovAge Bright
                  Sublime is our advanced performing skin care line that has
                  been clinically proven to be able to disguise dark spots, for
                  brighter looking skin with an even color while reducing fine
                  lines and wrinkles.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="m-carousel-show">
              <img
                src="https://docs.google.com/uc?id=1ghg5UD5uj8Fwld9OBoneYqSX2LF0w-h8"
                className="m-carousel-image"
                alt="..."
              />
              <div className="m-carousel-text">
                <h2>Nova Age</h2>
                <p>
                  Introducing a new safe brightening skin solution to help
                  disguise skin pigment imperfections and reveal the smooth,
                  radiant looking skin you've always wanted. NovAge Bright
                  Sublime is our advanced performing skin care line that has
                  been clinically proven to be able to disguise dark spots, for
                  brighter looking skin with an even color while reducing fine
                  lines and wrinkles.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="m-carousel-show">
              <img
                src="https://docs.google.com/uc?id=1ghg5UD5uj8Fwld9OBoneYqSX2LF0w-h8"
                className="m-carousel-image"
                alt="..."
              />
              <div className="m-carousel-text">
                <h2>Nova Age</h2>
                <p>
                  Introducing a new safe brightening skin solution to help
                  disguise skin pigment imperfections and reveal the smooth,
                  radiant looking skin you've always wanted. NovAge Bright
                  Sublime is our advanced performing skin care line that has
                  been clinically proven to be able to disguise dark spots, for
                  brighter looking skin with an even color while reducing fine
                  lines and wrinkles.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
