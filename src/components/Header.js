import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header--full">
      <div className="header--left">
        <h1 className="logo">ModernRealEstateListings</h1>
      </div>
      <div className="header--right">
        <Link to="/signin" style={{ color: '#333', textTransform: 'uppercase', fontSize: '0.7rem' }}>Sign-In</Link>
      </div>
    </div>
  );
}

export default Header;
