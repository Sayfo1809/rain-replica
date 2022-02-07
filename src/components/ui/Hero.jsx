import React from "react";

import heroImage from "../../img/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="col-1_2">
          <h2 className="heading-2">upgrade to 5G</h2>
          <h2 className="heading-2">for less this winter</h2>
          <p className="hero__text">Ts and Cs apply.</p>
        </div>
        <div className="col-1_2">
          <img src={heroImage} alt="Hero image" className="hero__img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
