import React from "react";


import "./css/skills.css";
import styled from "styled-components";


const Bar = styled.div`
position: relative;
display: inline-block;
background: #eee;
height: 5vh;
width: 30vw;
overflow: hidden;
margin :6px;
&:after {
  content: "${props => props.name}";
  color: white;
  text-align: center;
  padding:10px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 20%;
  background: rgb(122, 122, 122);
}
&:before {
  content: "";
    position: absolute; 
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.width};
    background: rgb(194, 194, 194);
}
`;

class Skills extends React.Component {
 
  render() {
    return (
      
      <div class="wrapper d-flex flex-column justify-content-center align-items-between p">
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
               <div class="col-6 text-center text-light display-6">
                    <div>
                      My Focus
                    </div>
                    <hr class=""/>
                    <p>
                      Back-end development
                    </p>
                    <p>
                     Database Administration
                    </p>
                    <p>
                      Clean Coding
                    </p>
                    <p>
                     DevOps
                    </p>
               </div>
               <div class="col-6 ">
                <Bar name="HTML" width="60%"/>
                <Bar name="CSS" width="75%"/>
                <Bar name="Javascript" width="90%"/>
                <Bar name="Python" width="95%"/>
                <Bar name="C++" width="70%"/>
                <Bar name="Ruby" width="75%"/>
                <Bar name="SQL" width="90%"/>
                <Bar name="Nosql" width="70%"/>
                <Bar name="Java" width="60%"/>
               </div>
            </div>


        </div>
      </div>
        
     
    );
  }
}

export default Skills;
