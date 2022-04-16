import React from "react";


import "./skills.css";
import ProgressBar from './progressBar'

class Skills extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      
      <div class="wrapper d-flex flex-column justify-content-center align-items-between">
        <div class="container ">
            <div class="row justify-content-center align-items-center">
                <div class="col-12 text-center display-1 text-white text-center m-3 skills">
                    Skills
                </div>
            </div>
            <div class="row text-center text-light m-3">
                <p>
                Pellentesque vel facilisis nunc. Duis feugiat metus nec ipsum convallis pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas laoreet velit in tellus sodales, in porta ligula scelerisque. Nulla vestibulum lorem sem. Nunc eget arcu mollis, venenatis magna aliquet, ullamcorper tortor. Nunc bibendum mauris a semper fermentum. Curabitur porta accumsan diam, eget malesuada nulla sodales eu. Phasellus vitae orci elit.
                Pellentesque vel facilisis nunc. Duis feugiat metus nec ipsum convallis pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas laoreet velit in tellus sodales, in porta ligula scelerisque. Nulla vestibulum lorem sem. Nunc eget arcu mollis, venenatis magna aliquet, ullamcorper tortor. Nunc bibendum mauris a semper fermentum.


                </p>
            </div>
            <div class="row justify-content-between align-items-center m-3 p-3 ">
               <div class="col-6 text-center text-light">
                    <div>
                        My Focus
                    </div>
                    <hr class=""/>
                    <p>
                        Back-end development
                    </p>
                    <p>
                    Back-end development
                    </p>
                    <p>
                    Back-end development
                    </p>
                    <p>
                    Back-end development
                    </p>
               </div>
               <div class="col-6 ">
                <ProgressBar/>
                <ProgressBar/>
                <ProgressBar/>
                <ProgressBar/>
                <ProgressBar/>
                <ProgressBar/>
                <ProgressBar/>
                <ProgressBar/>

               </div>
            </div>


        </div>
      </div>
        
     
    );
  }
}

export default Skills;
