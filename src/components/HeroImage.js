import "./HeroImageStyle.css";
import React from 'react';
import IntroImg from "../assets/blockchain.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
   <div className="mask">
    <img className="into-img" src={IntroImg} alt="IntroImg"/>
    </div>  
    <div className="content">
        <p>HI, I'M BHARGAV KALARIYA</p>
        <h1>Flutter Developer</h1>
        <div>
            <Link to="/project" className="btn">project
            </Link>
            <Link to="/contact" className="btn btn-light">Contact
            </Link>
        </div>
        </div>   
    </div>
  )
}

export default HeroImage