import React, { useEffect } from "react";
import "./About.css";
function About() {
  useEffect(() => {
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    topFunction();
  }, []);
  return (
    <div className="m-about" id="about">
      <img
        src="https://docs.google.com/uc?id=1kBsh_EOsL0JMheCmeFUFGojNi6ETiv4l"
        alt="about us"
      />
      <div className="m-about-content">
        <h2>
          <b>Who we are</b>
        </h2>
        <h4>
          <b>A beauty company like no other</b>
        </h4>
        <p>
          For over 50 years we have enabled people from all over the world to
          celebrate their personal beauty and fulfil their dreams. We create and
          offer high quality, safe, trend-driven products to beauty lovers and
          the unique possibility to become part of a global beauty community.
        </p>
        <h5>
          <b>Beauty by Sweden</b>
        </h5>
        <p>
          As a Swedish beauty brand we believe that when you look and feel good
          you have the opportunity to reach your full potential. And together
          with a passionate and supportive global community anything is
          possible. That’s beauty from a Swedish perspective.
        </p>
      </div>
    </div>
  );
}

export default About;
