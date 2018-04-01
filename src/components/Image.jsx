import React from 'react';
import './Image.css';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageName: this.props.imageName
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    console.log("clicked!");
  };

  handleChange(event) {
    console.log("changed");
  }

  render(){
    return(
      <div className="card">
        <div className="card-body">
          <img className="img-responsive img-fluid rounded-circle" 
            src={this.state.imageName} alt="" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Image