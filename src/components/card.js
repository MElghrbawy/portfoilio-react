import React from "react";

import "./css/card.css";

class Card extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <>
      <div className="portCard display-6">
          
            <div>
              {this.props.name}
            </div>
            
    
      </div>
  </>
      
    );
  }
}

export default Card;