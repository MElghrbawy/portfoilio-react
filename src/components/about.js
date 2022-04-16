import React from "react";

import "./css/about.css";

class About extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
     
        <div class="container-fluid p-5">
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="h1 font-weight-bold text-center about-text">About me</div>
            </div>
            <div class="col-8">
              <div class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis est ultrices, cursus urna id, sagittis dui. Nam vel metus ornare, facilisis nisi a, sagittis sem. Aenean bibendum nibh tortor, eget dapibus odio suscipit ut. Praesent nibh dolor, pulvinar ut faucibus ac, tincidunt non leo. Pellentesque eu fringilla eros, et euismod ligula. Praesent tempus mollis quam. Praesent venenatis sapien in porta porttitor. Donec sed porttitor ex. Morbi aliquet augue eu ex volutpat bibendum. Morbi vitae suscipit arcu. Phasellus et tellus ligula. Integer vel est nec tortor consequat gravida.

              </div>
              <button class="btn btn-dark mt-4 btn-lg">Download Resume</button>
            </div>
          </div>
        </div>
      
    );
  }
}

export default About;
