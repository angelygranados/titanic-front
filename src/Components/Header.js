import React from 'react';
import { Link } from "react-scroll";
import arrow from "../assets/images/arrow-down-white.png";

const Header = () => {

  return(
    <header className="Header">
      <h1>Titanic<span>¿Vivirías o morirías?</span></h1>
      <Link 
        to="Form" 
        smooth={true}
        duration={500}
        className="btn"
      >
        <img className="arrow" src={arrow} alt="Arrow down"></img>
      </Link>
    </header>
  );
}
export default Header;