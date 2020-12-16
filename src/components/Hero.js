import React from "react";
import src from '../img/image9.jpg';
import FilterListings from '../components/FilterListing';

function Hero() {
  return (
    <div className="hero fade-in">
    <img
      alt="hero"
      src={src}
      style={{
        width: "100%"  
      }}
    />
  <FilterListings />
  </div>
  );
}

export default Hero;
