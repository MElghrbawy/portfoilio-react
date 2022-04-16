import React from "react";

import "./css/portfolio.css";
import Card from "./card";

class Portfolio extends React.Component {

  render() {
    return (
      <div class="portfolioWrapper">
        <div class="row">
          <div class="col-12 m-3 p-3 display-3 ">Portfolio</div>
        </div>

        <div class="row justify-content-around align-items-center mt-2">
          <div class=" col-3  m-2">
          <Card name="RUBY ON RAILS" />
          </div>
          <div class=" col-3  m-2">
          <Card name="NODE JS" />
          </div>
          <div class=" col-3  m-2">
          <Card name="DJANGO" />
          </div>
          <div class=" col-3  m-2">
          <Card name="FLASK" />
          </div>
          <div class=" col-3  m-2">
          <Card name="LARAVEL" />
          </div>
          <div class=" col-3  m-2">
          <Card name="SPRING" />
          </div>
         
        </div>
      </div>
    );
  }
}

export default Portfolio;
