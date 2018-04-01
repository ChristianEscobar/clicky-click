import React from 'react';
import './Image.css';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    console.log("clicked!");
  };

  render(){
    return(
      <div className="card">
        <div className="card-body">
          <img className="img-responsive img-fluid rounded-circle" 
            src={this.props.imageName} alt="" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Image