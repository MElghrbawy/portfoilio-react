import React from "react";

import "./css/hero.css";

class HeroSection extends React.Component {
 
  render() {
    return (
      <div className="hero">
        <div className="text-container">
          <h1 className="title display-3">Mohamed El Ghrbawy</h1>
          <p className="sub-title">Full Stack Web Developer</p>
          <button className="contact">CONTACT ME</button>
        </div>
      </div>
    );
  }
}

export default HeroSection;
