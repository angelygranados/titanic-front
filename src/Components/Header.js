import React from 'react';
import hero from "../assets/images/hero-titanic.jpg";

const Header = () => {
  return(
    <header className="Header">
      <h1>Titanic</h1>
      <img src={hero}></img>
    </header>
  );
}
export default Header;