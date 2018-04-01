import React from 'react';
import './Image.css';

class Image extends React.Component {
  render(){
    return(
      <div className="card">
        <div className="card-body">
          <img className="img-responsive img-fluid rounded-circle" 
            src={this.props.imageName} alt=""/>
        </div>
      </div>
    );
  }
}

export default Image