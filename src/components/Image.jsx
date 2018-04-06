import React from 'react';
import './Image.css';

class Image extends React.Component {

  render(){
    return(
      <div className="card">
        <div className="card-body">
          <img className="img-responsive img-fluid rounded" 
            src={this.props.imageName} alt={this.props.imageName} onClick={this.props.imageClick}/>
        </div>
      </div>
    );
  }
}

export default Image