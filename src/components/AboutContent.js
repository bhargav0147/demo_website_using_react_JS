import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import Img1 from "../assets/f1.jpg";
import Img2 from "../assets/f2.jpg";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a flutter developer. I create responsive secure app & websites for
          my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Img1} className="Img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={Img2} className="Img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
