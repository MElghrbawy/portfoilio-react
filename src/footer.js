import React from "react";

import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faBlender} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'



class Footer extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
     <div className="row bg-black justify-content-between p-5 text-white"> 
      <div className="col-3" >
        <p>
            GET IN TOUCH
        </p>
        <div>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        <span>  mohamed.elghrbawy@gmail10.com</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faBlender}></FontAwesomeIcon>
        <span> +2011-585-35-672</span>
        </div>
      </div>
      <div className="col-3 d-flex justify-content-center align-items-center" >
      <button className="contact">
            CONTACT ME
          </button>
      </div>
      <div className="col-3 d-flex justify-content-around align-items-end flex-column" >
      <div className="d-flex  justify-content-around w-25">
      <FontAwesomeIcon icon={faFacebookF} ></FontAwesomeIcon>
      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </div>
     
      <p>
        Copyright &copy; 2022 EG
      </p>

      </div>
     
     </div>
      
    );
  }
}

export default Footer;